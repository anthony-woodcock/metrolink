var stationNames = [
  'Altrincham', 
  'Navigation Road', 
  'Timperley', 
  'Brooklands', 
  'Sale',
  'Dane Road',
  'Stretford',
  'Old Trafford',
  'Trafford Bar',
  'Cornbrook',
  'Deansgate-Castlefield',
  'St Peter\'s Square',
  'Piccadilly Gardens',
  'Piccadilly',
  'New Islington',
  'Holt Town',
  'Etihad Campus',
  'Velopark',
  'Clayton Hall',
  'Edge Lane',
  'Cemetery Road',
  'Droylsden',
  'Audenshaw',
  'Ashton Moss',
  'Ashton West',
  'Ashton-under-Lyne'
]

var altrinchamToAshtonUnderLyne = new Route ()

var stations = $.each(stationNames,function (stationIndex, stationName) {
    
 altrinchamToAshtonUnderLyne.addStaion(new Station(stationName))
}) 

var tram = new Tram(altrinchamToAshtonUnderLyne, altrinchamToAshtonUnderLyne.getStations()[0])
<<<<<<< HEAD
=======

$.each(altrinchamToAshtonUnderLyne.getStations(), function(stationIndex, station){

  var stationHTML = '<div class="station">'
  stationHTML += '<div class="circle' + CSS + '"></div>'
  stationHTML += '<div class="name">' + station.getname() + '</div>'
  stationHTML += '</div>'

  $('#stations').append(stationHTML)
})
>>>>>>> 5914f89351a053a1dee71c0530de4f18e18c52d6
