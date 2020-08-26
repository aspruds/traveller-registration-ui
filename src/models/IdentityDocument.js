export class IdentityDocument {
    constructor({
                    documentType =  null,
                    documentNumber = ''
                } = {}) {
        this.documentType = documentType;
        this.documentNumber = documentNumber;
    }
}

export function createIdentityDocument(data) {
    return Object.freeze(new IdentityDocument(data));
}