import {IdentityDocument} from "@/models/IdentityDocument";
import {ContactInformation} from "@/models/ContactInformation";

export class Traveller {
    constructor({
                    id = null,
                    firstName = '',
                    lastName = '',
                    sex = null,
                    citizenship = null,
                    nationalId = '',
                    dateOfBirth = null,
                    seat = '',
                    identityDocument = new IdentityDocument(),
                    contactInformation = new ContactInformation(),
                    recentCountries = [],
                } = {}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.sex = sex;
        this.citizenship = citizenship;
        this.nationalId = nationalId;
        this.dateOfBirth = dateOfBirth;
        this.seat = seat;
        this.identityDocument = identityDocument;
        this.contactInformation = contactInformation;
        this.recentCountries = recentCountries;
    }
}

export function createTraveller(data) {
    return Object.freeze(new Traveller(data));
}