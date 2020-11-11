# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Character.destroy_all
CharacterItem.destroy_all
Item.destroy_all
Job.destroy_all
Monster.destroy_all
MonsterItem.destroy_all
Player.destroy_all

main = Player.create(username: "MarkDLR", password: "password")
Player.create(username: "test", password: "other")

knight = Job.create(name: "Knight", description: "You are a Noble Knight", img: "https://s-media-cache-ak0.pinimg.com/236x/c5/9c/25/c59c25e66d3a4b6ba706c55856cfded7.jpg", hp: 5, def: 10, atk: 5)
barbarian = Job.create(name: "Barbarian", description: "You are a Ruthless Barbarian", img: "https://i.pinimg.com/474x/ef/74/26/ef742673fd9d5e7666400bd998ef3ff5.jpg", hp: 5, def: 5, atk: 10)

lance = Character.create(player: main, name: "Lancelot", level: 1, job: knight, atk: 10, def: 10, hp: 10, exp: 0 )
leif = Character.create(player: main, name: "Leif", level: 1, job: barbarian, atk: 10, def: 10, hp: 10, exp: 0 )

sword = Item.create(name: "Sword", item_type: "Weapon", sub_type: "melee", atk: 10, def: 5, hp: 0)
shield = Item.create(name: "Shield", item_type: "Weapon", sub_type: "shield", atk: 0, def: 10, hp:0)
chestplate = Item.create(name: "Chestplate", item_type: "Armor", sub_type: "chest", atk: 0, def: 12, hp: 0)
gauntlets = Item.create(name: "pair of Gauntlets", item_type: "Armor", sub_type: "hands", atk: 2, def: 3, hp: 0)
boots = Item.create(name: "pair of Boots", item_type: "Armor", sub_type: "feet", atk: 1, def: 4, hp: 0)
helmet = Item.create(name: "Helmet", item_type: "Armor", sub_type: "head", atk: 0, def: 5, hp: 0)
battle_axe = Item.create(name: "Battle axe", item_type: "Weapon", sub_type: "melee", atk: 10, def: 0, hp: 0)
daggers = Item.create(name: "Dagger", item_type: "Weapon", sub_type: "melee", atk: 7, def: 3, hp: 0)
s_chestplate = Item.create(name: "Superior Chestplate", item_type: "Armor", sub_type: "chest", atk: 0, def: 20, hp: 0)
s_helmet = Item.create(name: "Superior Helmet", item_type: "Armor", sub_type: "head", atk: 0, def: 10, hp: 0)
s_gauntelets = Item.create(name: "pair of Superior_Gauntlets", item_type: "Armor", sub_type: "hands", atk: 6, def: 9, hp: 0)
s_daggers = Item.create(name: "Superior Dagger", item_type: "Weapon", sub_type: "melee", atk: 25, def: 12, hp: 0)
s_sword = Item.create(name: "Superior Sword", item_type: "Weapon", sub_type: "melee", atk: 30, def: 15, hp: 0)
s_shield = Item.create(name: "Superior Shield", item_type: "Weapon", sub_type: "shield", atk: 0, def: 30, hp:0)

goblin = Monster.create(name: "Goblin", img: "https://i.pinimg.com/564x/37/48/a8/3748a8625474eabd8ee1ae8c9554fc1b.jpg", difficulty: "Easy", atk: 15, def: 12, hp: 10, exp: 20)
kobold = Monster.create(name: "Kobold", img: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/379/1000/1000/636252780450300625.jpeg", difficulty: "Easy", atk: 12, def: 15, hp: 10, exp: 30)
wolf = Monster.create(name: "Wolf", img: "https://i.pinimg.com/564x/4c/e9/ca/4ce9caa4f8fb034792434f4280a95722.jpg", difficulty: "Medium", atk: 25, def: 15, hp: 50, exp: 100)
animated_armor = Monster.create(name: "Animated Armor", img: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/429/1000/1000/636306156895834255.jpeg", difficulty: "Medium", atk: 25, def: 20, hp: 45, exp: 75)
wyrmling = Monster.create(name: "Wyrmling", img: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/215/375/315/636252764963208954.jpeg", difficulty: "Hard", atk: 50, def: 35, hp: 200, exp: 500)
orc = Monster.create(name: "Orc", img: "https://farm5.staticflickr.com/4442/37183208985_89cb930a0d_b.jpg", difficulty:"Hard", atk: 45, def: 60, hp: 100, exp: 300)

MonsterItem.create(monster: goblin, item: daggers)
MonsterItem.create(monster: goblin, item: shield)
MonsterItem.create(monster: goblin, item: helmet)

MonsterItem.create(monster: kobold, item: boots)
MonsterItem.create(monster: kobold, item: gauntlets)
MonsterItem.create(monster: kobold, item: sword)

MonsterItem.create(monster: animated_armor, item: s_chestplate)
MonsterItem.create(monster: animated_armor, item: s_gauntelets)

MonsterItem.create(monster: wolf, item: s_helmet)
MonsterItem.create(monster: wolf, item: s_daggers)
MonsterItem.create(monster: wolf, item: chestplate)

MonsterItem.create(monster: orc, item: battle_axe)
MonsterItem.create(monster: orc, item: s_sword)

MonsterItem.create(monster: wyrmling, item: s_sword)
MonsterItem.create(monster: wyrmling, item: s_shield)

CharacterItem.create(character: lance, item: sword)
CharacterItem.create(character: lance, item: shield)
CharacterItem.create(character: lance, item: daggers)