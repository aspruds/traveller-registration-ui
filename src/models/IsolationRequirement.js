export class IsolationRequirement {
    constructor({
                    countryCode = '',
                    validFrom = '',
                    validTo = '',
                    isolationRequired = true
                } = {}) {
        this.countryCode = countryCode;
        this.validFrom = validFrom;
        this.validTo = validTo;
        this.isolationRequired = isolationRequired
    }
}