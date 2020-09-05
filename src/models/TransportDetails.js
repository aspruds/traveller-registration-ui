export class TransportDetails {
    constructor({
                    carrierType = '',
                    flightNumber =  '',
                    routeNumber =  '',
                    routeNumberKnown = true,
                    routeOrigin = '',
                    routeDepartureDate = '',
                    routeDepartureTime = '',
                    dateOfEntry = ''
                } = {}) {
        this.carrierType = carrierType;
        this.flightNumber = flightNumber;
        this.routeNumber = routeNumber;
        this.routeNumberKnown = routeNumberKnown;
        this.routeOrigin = routeOrigin;
        this.routeDepartureDate = routeDepartureDate;
        this.routeDepartureTime = routeDepartureTime;
        this.dateOfEntry = dateOfEntry;
    }
}

export function createTransportDetails(data) {
    return Object.freeze(new TransportDetails(data));
}