class KnuxesController < ApplicationController
    def index
        render json: Knux.all
    end

    def create
        @knux = Knux.new(knux_params)
        @knux.save
        render json: @knux
    end

    def update
        @knux = Knux.find(params[:id])
        @knux.update_attributes(knux_params)
        render json: @knux
    end

    def knux_params
        params.require(:knux).permit(:knux)
    end
end