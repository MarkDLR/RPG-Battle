class ApplicationController < ActionController::API

    def current_player
        token = request.headers['Auth-key']
        begin
            player_id = JWT.decode(token,'secretkey')[0]["player_id"]
            @player = Player.find_by(id: player_id)
        rescue
            nil
        end
    end

    def authenticate!
        unless current_player
            nil
        end
    end
    
end