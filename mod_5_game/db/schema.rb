# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_16_231217) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "character_items", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.bigint "item_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_character_items_on_character_id"
    t.index ["item_id"], name: "index_character_items_on_item_id"
  end

  create_table "characters", force: :cascade do |t|
    t.bigint "player_id", null: false
    t.string "name"
    t.integer "level"
    t.bigint "job_id", null: false
    t.integer "atk"
    t.integer "def"
    t.integer "hp"
    t.integer "exp"
    t.integer "gold"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["job_id"], name: "index_characters_on_job_id"
    t.index ["player_id"], name: "index_characters_on_player_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.string "item_type"
    t.string "sub_type"
    t.integer "atk"
    t.integer "def"
    t.integer "hp"
    t.integer "gold"
    t.boolean "character_equipped"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "img"
    t.integer "hp"
    t.integer "def"
    t.integer "atk"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "monster_items", force: :cascade do |t|
    t.bigint "monster_id", null: false
    t.bigint "item_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["item_id"], name: "index_monster_items_on_item_id"
    t.index ["monster_id"], name: "index_monster_items_on_monster_id"
  end

  create_table "monsters", force: :cascade do |t|
    t.string "name"
    t.string "difficulty"
    t.string "img"
    t.integer "atk"
    t.integer "def"
    t.integer "hp"
    t.integer "exp"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "players", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "character_items", "characters"
  add_foreign_key "character_items", "items"
  add_foreign_key "characters", "jobs"
  add_foreign_key "characters", "players"
  add_foreign_key "monster_items", "items"
  add_foreign_key "monster_items", "monsters"
end
