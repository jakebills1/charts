# frozen_string_literal: true
class User < ActiveRecord::Base
  extend Devise::Models # fixed server error after upgrade to rails 6 and newest devise_toke_auth version
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
  has_many :charts
  has_many :playlists
end
