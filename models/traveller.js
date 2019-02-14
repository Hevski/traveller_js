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
  return this.journeys.reduce((totalDistance, journey) => {
    return totalDistance + journey.distance
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return [...new Set(this.journeys.map(journey => journey.transport))];

  const unique = this.journeys.map(journey => journey.transport)
  return unique.filter((transport, index, unique) => unique.indexOf(transport) === index)
 // const uniqueTransports = newSet(unique)
  //return Array.from(unique)

  let results = [];

  this.journeys.forEach(journey => {
    if(!results.includes(journey.transport)){
      results.push(journey.transport)
    }
  })
  return results
};
module.exports = Traveller;
