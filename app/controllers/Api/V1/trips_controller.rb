module Api
    module V1
        class TripsController < ApplicationController
            protect_from_forgery with: :null_session
            def index
                trips = Trip.all
    
                render json: TripSerializer.new(trips, options).serializable_hash.to_json
            end
    
            def show
                trip = Trip.find_by(slug: params[:slug])
                
                render json: TripSerializer.new(trip, options).serializable_hash.to_json
    
            end
    
            def create
                trip = Trip.new(trip_params)
    
                if trip.save
                    render json: TripSerializer.new(trip).serializable_hash.to_json
                else
                    render json: {error: trip.errors.messages}, status:422
                end
    
            end
    
            def update
                trip = Trip.find_by(slug: params[:slug])
    
                if trip.update(trip_params)
                    render json: TripSerializer.new(trip, options).serializable_hash.to_json
                else
                    render json: {error: trip.errors.messages}, status:422
                end
    
            end
    
            def destroy
                trip = Trip.find_by(slug: params[:slug])
    
                if trip.destroy
                    head :no_content
                else
                    render json: {error: trip.errors.messages}, status:422
                end
    
            end
    
    
            private 
            def trip_params
                params.require(:trip).permit(:name, :image_url, :description, :priority)
            end
    
            def options
                @options ||= {include: %i[locations]}
            end
        
        end 
    end
end
