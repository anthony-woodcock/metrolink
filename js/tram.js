function Tram (route, startingStation) {
    this._route = route 
    this._currentStation = startingStation
}
    Tram.prototype = {
        getCurrentStation: function () {

             return this._currentStation
        },
        drive: function () {
            var routeStations = this._route.getStations()
            var currentStationIndex = routeStations.indexOf(this._currentStation)
            var nextStationIndex = currentStationIndex + 1
            
            if (nextStationIndex >= routeStations.length) {
                return "end of the line"
            
            }
            this._currentStation = routeStations[nextStationIndex]
            return "now arriving at : " + this._currentStation.getName() 
        },
       reset: function () {
    this._currentStation = this._route.getStations()[0]
} 
    
}


