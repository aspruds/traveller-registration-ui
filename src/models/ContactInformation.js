export class ContactInformation {
    constructor({
                    email = '',
                    phones =  [],
                    addresses = []
                } = {}) {
        this.email = email;
        this.phones = phones;
        this.addresses = addresses;
    }
}

export function createContactInformation(data) {
    return Object.freeze(new ContactInformation(data));
}