import {createIdentityDocument} from "@/models/IdentityDocument";
import {createContactInformation} from "@/models/ContactInformation";

export function createTraveller(id) {
    return {
        id: id,
        firstName: null,
        lastName: null,
        sex: null,
        citizenship: null,
        nationalId: null,
        dateOfBirth: null,
        identityDocument: createIdentityDocument(),
        contactInformation: createContactInformation()
    }
}