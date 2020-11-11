class MonstersController < ApplicationController

    def index
        monsters = Monster.all
        render :json => monsters.as_json(include: :items)
    end

    def show
        monster = Monster.find_by(id: params[:id])
        render json: monster, includes: [:monster_items]
    end
end
