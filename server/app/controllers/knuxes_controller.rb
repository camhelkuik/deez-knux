class KnuxesController < ApplicationController
    def index
        render json: Knux.all
    end
end