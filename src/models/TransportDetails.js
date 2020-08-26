export class TransportDetails {
    constructor({
                    carrierType = '',
                    flightNumber =  '',
                    dateOfEntry = ''
                } = {}) {
        this.carrierType = carrierType;
        this.flightNumber = flightNumber;
        this.dateOfEntry = dateOfEntry;
    }
}

export function createTransportDetails(data) {
    return Object.freeze(new TransportDetails(data));
}