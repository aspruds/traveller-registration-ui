export class Phone {
    constructor({
                    id = null,
                    phoneCountryCode =  '',
                    phoneNumber = ''
                } = {}) {
        this.id = id;
        this.phoneCountryCode = phoneCountryCode;
        this.phoneNumber = phoneNumber;
    }
}

export function createPhone(data) {
    return Object.freeze(new Phone(data));
}