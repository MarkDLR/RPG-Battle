class PlayersController < ApplicationController

    # before_action :find_player, only: [:show, :destroy]
    before_action :authenticate!, only: [:index, :destroy]
    def index

        if current_player 
            @player = current_player
            render :json => @player.as_json(include: [:characters]), :status => :ok
        else
            render :json => { :msg => "Login first.." }
        end
    end

    def show
        @player = Player.find_by(id: params[:id])
        render :json => @player.as_json(include: [:characters])
    end
    
    
    def create
        @player = Player.create(player_params)
        payload = { player_id: @player.id }
        token = JWT.encode(payload, 'secretkey', 'HS256')
        render :json => { :auth_key => token }, :status => :ok
    end

    def destroy
        if current_player
            if @player.destroy
                flash[:message] = "Player no longer exists"
                redirect_to players_path(@player)
            else
                flash[:message] = "Player still exists"
                redirect_to players_path
            end
        else
            render :json => {msg: "log in to delete profile"}
    
        end
    end
    private

    def player_params
        params.require(:player).permit(:username, :password)
    end

    # def find_player
    #     @player = Player.find_by(player_id: current_player.id)
    # end
    
end
