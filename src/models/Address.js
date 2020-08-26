export class Address {
    constructor({
                    id = null,
                    countryCode= null,
                    zip= null,
                    province= null,
                    city= null,
                    district= null,
                    village= null,
                    street= null,
                    house= null,
                    flat= null,
                } = {}) {
        this.id = id;
        this.countryCode = countryCode;
        this.zip = zip;
        this.province = province;
        this.city = city;
        this.district = district;
        this.village = village;
        this.street = street;
        this.house = house;
        this.flat = flat;
    }
}

export function createAddress(data) {
    return Object.freeze(new Address(data));
}