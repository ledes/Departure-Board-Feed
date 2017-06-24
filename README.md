# Departure Board Feed

[Click Here To View Heroku Application](https://arcane-reaches-51102.herokuapp.com/)

## Description
This is a mini project built in a weekend with ReactJs and Ruby on Rails that shows the train departure times from the North Station and South Station of Boston using fake data. The idea behind this project was building a small project with a different look and that it could evolve into an mobile app that uses real data from the MBTA.

The style applied has been done to give it a retro look and also to emulate the departure boards from train/airport stations.

## Ruby version
*2.2.3*

#### Technical Specifications
- Ruby on Rails. Ruby
- React Js. Javascript ES5
- PostgreSQL
- HTML
- SASS
- Lodash

## ER Diagram
![ERDiagram](http://i.imgur.com/LE2LeQy.png)

## Future Implementations
*  React Native app (visit [link](https://github.com/ledes/retro-MBTA))
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
