export class ContactInformation {
    constructor({
                    email = null,
                    phoneCountryCode = null,
                    phoneNumber = null,
                } = {}) {
        this.email = email;
        this.phoneCountryCode = phoneCountryCode;
        this.phoneNumber = phoneNumber;
    }
}

export function createContactInformation(data) {
    return Object.freeze(new ContactInformation(data));
}