class Api::PlaylistsController < ApplicationController
  before_action :set_playlist, only: [:update, :destroy]
  def index
    render json: current_user.playlists.all
  end
  def create
    playlist = current_user.playlists.create(playlist_params)
    if playlist.save
      render json: playlist
    else
      render json: playlist.errors
    end
  end
  def update
    if @playlist.update(playlist_params)
      render json: @playlist
    else
      render json: @playlist.errors
    end
  end
  def delete
    @playlist.destroy
  end
  
  private
    def playlist_params
      params.require(:playlist).permit(:name)
    end
    def set_playlist
      @playlist = current_user.playlists.find(params[:id])
    end
end
