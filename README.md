# Departure Board Feed

[Click Here To View Heroku Application](https://arcane-reaches-51102.herokuapp.com/)

## Description
A simple ReactJs and Rails application that shows the train departure times from the North Station and South Station of Boston. The style applied has been done to give it a retro look and also to emulate the departure boards from train/airport stations. For instance: [departure board](https://upload.wikimedia.org/wikipedia/commons/4/43/North_Station_departure_board.JPG)

## Ruby version
*2.2.3*

#### Technical Specifications
- Ruby on Rails. Ruby
- React Js. Javascript
- PostgreSQL
- HTML
- SASS
- Lodash

## ER Diagram
![ERDiagram](http://i.imgur.com/LE2LeQy.png)

## Future Implementations
*  Feed real data using MBTA APIs
*  Limit the trips to show only the ones in the next hour
*  Add different colors to the different statuses
*  Add filters by columns

## Use this repo locally
* Clone the repository
* `bundle install`
* `rake db:create`
* `rake db:migrate`
* `rake db:seed`
* `rails s`

## Run the tests
`rspec spec`
