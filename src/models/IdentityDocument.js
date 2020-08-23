export class IdentityDocument {
    constructor({
                    documentType = null,
                    issuingCountryCode = null,
                    documentNumber = null,
                } = {}) {
        this.documentType = documentType;
        this.issuingCountryCode = issuingCountryCode;
        this.documentNumber = documentNumber;
    }
}

export function createIdentityDocument(data) {
    return Object.freeze(new IdentityDocument(data));
}