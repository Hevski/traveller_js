const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >= minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((totalDistance, journey) => {
    return totalDistance + journey.distance
  }, 0)
  return total
};

Traveller.prototype.getUniqueModesOfTransport = function () {

  return journeys.uniq([this.transport])
  // var uniqueModes = [...new Set(this.journeys)]
  // const uniqueModes = this.journey.from(new Set(journeys))
  // const distinct = (value, index, journey) => {
  // return jounrney.indexOf(value) === index
  // return this.journeys.filter(distinct)

};
//new Set([iterable]);
// var items = [4,5,4,6,3,4,5,2,23,1,4,4,4]
// var uniqueItems = Array.from(new Set(items))

module.exports = Traveller;
