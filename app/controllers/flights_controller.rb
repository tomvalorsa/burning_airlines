class FlightsController < ApplicationController
  before_action :set_flight, only: [:show, :edit, :update, :destroy]

  before_action :check_if_admin, only: [:new, :create, :edit, :update, :destroy]

  # GET /flights
  # GET /flights.json
  def index
    @flights = Flight.all

    respond_to do |format|
      format.html {}
      # format.json { render :json => @flights }
      format.json { render :json => @flights }
    end
  end

  # GET /flights/1
  # GET /flights/1.json
  def show
  end

  # GET /flights/new
  def new
    @airplane = Airplane.find params[:airplane_id]
    @flight = Flight.new
  end

  # GET /flights/1/edit
  def edit
  end

  # POST /flights
  # POST /flights.json
  def create

    @airplane = Airplane.find params[:airplane_id]
    @flight = @airplane.flights.new flight_params
    @flight.update(:airplane_id => params[:airplane_id])

    num_seats = @airplane.rows * @airplane.columns
    num_seats.times do
      # British Shareways? There's just one seat and everyone has to share
      @flight.seats.create(
        :flight_id => @flight.id
      )
    end


    redirect_to "/airplanes/#{@airplane.id}/flights"
  end

  # PATCH/PUT /flights/1
  # PATCH/PUT /flights/1.json
  def update
    respond_to do |format|
      if @flight.update(flight_params)
        format.html { redirect_to @flight, notice: 'Flight was successfully updated.' }
        format.json { render :show, status: :ok, location: @flight }
      else
        format.html { render :edit }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /flights/1
  # DELETE /flights/1.json
  def destroy
    @flight.destroy
    respond_to do |format|
      format.html { redirect_to flights_url, notice: 'Flight was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_flight
      @flight = Flight.find(params[:id])
    end

    def flight_params
      params.require(:flight).permit(:flight_name, :origin, :destination, :flight_date, :airplane_id)
    end

    def check_if_admin
      redirect_to(login_path) unless @current_user.present? && @current_user.is_admin?
    end

end
