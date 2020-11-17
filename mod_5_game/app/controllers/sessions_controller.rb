class SessionsController < ApplicationController

    def create
        @player = Player.find_by(username:params[:username])
        if @player && @player.authenticate(params[:password])
            payload = {player_id: @player.id }
            token = JWT.encode(payload, 'secretkey' , 'HS256')
            render :json => { auth_key: token }
        else
            render :json => { :msg => "Login failed.. Try again"}
        end
    end
  
end