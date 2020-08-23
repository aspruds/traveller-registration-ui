export class Traveller {
    constructor({
                    id = null,
                    firstName = null,
                    lastName = null,
                    sex = null,
                    citizenship = null,
                    nationalId = null,
                    dateOfBirth = null,
                    identityDocument = null,
                    contactInformation = null,
                } = {}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.sex = sex;
        this.citizenship = citizenship;
        this.nationalId = nationalId;
        this.dateOfBirth = dateOfBirth;
        this.identityDocument = identityDocument;
        this.contactInformation = contactInformation;
    }
}

export function createTraveller(data) {
    return Object.freeze(new Traveller(data));
}