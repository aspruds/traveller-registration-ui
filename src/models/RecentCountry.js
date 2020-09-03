export class RecentCountry {
    constructor({
                    id = null,
                    countryCode =  '',
                    dateOfExit = ''
                } = {}) {
        this.id = id;
        this.countryCode = countryCode;
        this.dateOfExit = dateOfExit;
    }
}

export function createRecentCountry(data) {
    return Object.freeze(new RecentCountry(data));
}