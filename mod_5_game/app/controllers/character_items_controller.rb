class CharacterItemsController < ApplicationController

    def index
        @looted_item = CharacterItem.all
        render :json => @looted_item.as_json(include: [:item, :character]), :status => :ok
    end


    def create
        @character_item = CharacterItem.new(item_params)

        if @character_item.save
            render :json => @character_item.as_json, :status => :ok
        else
            render :json => {:msg => "Couldn't loot item??"}
    
        end
    end

    private

    def item_params
        params.require(:character_item).permit(:character_id, :item_id)
    end

end
