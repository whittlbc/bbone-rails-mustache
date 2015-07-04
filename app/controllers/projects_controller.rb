class ProjectsController < ApplicationController
  def index
    render :index, :layout => 'layouts/application'
  end
end
