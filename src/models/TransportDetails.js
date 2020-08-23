export class TransportDetails {
  constructor({
                carrierType = null,
                flightNumber = null,
                dateOfEntry = null
              } = {}) {
    this.carrierType = carrierType;
    this.flightNumber = flightNumber;
    this.dateOfEntry = dateOfEntry;
  }
}

export function createTransportDetails(data) {
  return Object.freeze(new TransportDetails(data));
}