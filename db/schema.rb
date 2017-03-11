# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170311192303) do

  create_table "departures", force: :cascade do |t|
    t.integer  "lateness",      default: 0
    t.datetime "scheduledtime"
    t.integer  "trip_id",                   null: false
    t.integer  "status_id",                 null: false
    t.integer  "track_id"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "stations", force: :cascade do |t|
    t.string "CreateStations", null: false
  end

  create_table "statuses", force: :cascade do |t|
    t.string "name", null: false
  end

  create_table "tracks", force: :cascade do |t|
    t.string  "name",       null: false
    t.integer "station_id", null: false
  end

  create_table "trips", force: :cascade do |t|
    t.integer "external_identifier", null: false
    t.integer "origin_id",           null: false
    t.integer "destination_id",      null: false
  end

  add_index "trips", ["external_identifier"], name: "index_trips_on_external_identifier", unique: true

end