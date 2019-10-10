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
    playlist = Playlist.where("name like ?", params[:playlist])
    if playlist.empty?
      playlist = current_user.playlists.create(name: params[:playlist])
    end
    if file 
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        current_user.charts.create(url: cloud_image['secure_url'], name: name, artist: artist, genre: genre, group_name: group, playlist_id: playlist.ids[0])
        render json: current_user.charts.last
      rescue => exception
        render json: {errors: exception}, status: 422
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
    search_term = params[:search_term]
    search_type = params[:search_type]
    results = case search_type
      when "name"
        current_user.charts.where(["name ilike (?)", "%#{search_term}%"])
      when "artist"
        current_user.charts.where(["artist ilike (?)", "%#{search_term}%"])
      when "group"
        current_user.charts.where(["group_name ilike (?)", "%#{search_term}%"])
      when "genre"
        current_user.charts.where(["genre ilike (?)", "%#{search_term}%"])
    end
    render json: results
  end

  private
    def chart_params
      params.require(:chart).permit(:name, :artist, :genre, :group, :url, :playlist)
    end

    def set_chart
      @chart = current_user.charts.find(params[:id])
    end
end
