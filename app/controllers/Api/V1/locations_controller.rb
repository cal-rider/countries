module Api
    module V1
        class LocationsController < ApplicationController
            protect_from_forgery with: :null_session

            def create
                location = Location.new(location_params)
                    if location.save
                        render json: LocationSerializer.new(location).serializable_hash.to_json
                    else
                        render json: {error: location.errors.messages}, status:422
                    end
                end


            def destroy
                location = Location.find(params[:id])
                    if location.destroy
                        head :no_content
                    else
                        render json: {error: location.errors.messages}, status:422
                    end        
                end

            private

            def location_params
                params.require(:location).permit(:name, :description, :Trip_id, :priority)
            end

        end    
    end
end
