class GreenhousesController < ApplicationController

  def index

  end

  def greenhouse_add_modal
    @greenhouse = Greenhouse.new
  end

  def create
    @greenhouse = Greenhouse.new

    if @greenhouse.save
      redirect_to root_path
    else
      render "greenhouses/greenhouse_add_modal", status: :unprocessable_entity
    end
  end

  private

  def greenhouse_params
    params.require(:greenhouse).permit(:name)
  end

end
