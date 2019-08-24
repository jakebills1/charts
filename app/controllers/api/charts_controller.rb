class Api::ChartsController < ApplicationController
  before_action :set_chart, only: [:update, :destroy]
  def index
    render json: current_user.charts.all
  end

  def create
    file = params[:file]
    name = params[:name]
    artist = params[:artist]
    genre = params[:genre]
    group = params[:group]
    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        current_user.charts.create(url: cloud_image['secure_url'], name: name, artist: artist, genre: genre, group: group)
        render json: {message: "chart uploaded"}
      rescue => e
        render json: { errors: e }, status: 422
      end
    end
  end
  
  def update
    if @chart.update(chart_params)
      render json: @chart
    else
      render json: @chart.errors
    end
  end

  def delete
    @chart.destroy
  end 

  def search 
    require 'pry';binding.pry
  end

  private
    def chart_params
      params.require(:chart).permit(:name, :artist, :genre, :group, :url)
    end

    def set_chart
      @chart = current_user.charts.find(params[:id])
    end
end
