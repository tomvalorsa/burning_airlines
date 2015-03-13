class PagesController < ApplicationController
  def landing
  end

  def search
  end

  private
  def check_if_admin
    redirect_to(login_path) unless @current_user.present? && @current_user.is_admin?
  end
end
