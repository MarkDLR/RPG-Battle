class CharactersController < ApplicationController

    before_action :find_character, only: [:show, :destroy, :update]
    before_action :authenticate!, only: [:index, :destroy, :update, :show]

    def index 
        if current_player
            @characters = Character.all.select{ |c| c.player_id == current_player.id}
            render :json => @characters.as_json(include: [:player, :items, :job]), :status => :ok
        else
            render :json => { :msg => "Login first.." }
        end
    end

    def show
        @character = Character.find_by(id: params[:id])
        render json: @character, include: [:items,:job,:items]
    end

    def create
        @character = Character.new(character_params)
        @character.player = current_player
        @character.level = 1
        @character.atk = 10
        @character.def = 10
        @character.hp = 10
        @character.exp = 0
        
        if @character.save
            render :json => @character.as_json, :status => :ok
        else
            render :json => {:msg => "Character was not created" }, :status => :bad_request
        end
    end

    def update
        
        @character.save
        render json: @character
    end

    def destroy
        @character.destroy
        render :json => { :msg => "Character was deleted" }, :status => :ok
    end

    private

    def character_params
        params.require(:character).permit(:name, :job_id)
    end

    def find_character
        @character = Character.find_by(id: params[:id])
    end

end

