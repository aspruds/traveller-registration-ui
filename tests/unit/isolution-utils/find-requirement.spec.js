import {expect} from 'chai'
import {IsolationRequirement} from "@/models/IsolationRequirement";
import {findRequirement} from '@/utils/isolation/isolation-utils'

describe('isolation-utils.findRequirement', () => {
    const isolationRequirements = [
        new IsolationRequirement({countryCode: "ES", validFrom: "2020-09-04", validTo: "2020-09-11", isolationRequired: false}),
        new IsolationRequirement({countryCode: "ES", validFrom: "2020-09-11", validTo: "2020-09-18", isolationRequired: true}),
        new IsolationRequirement({countryCode: "EE", validFrom: "2020-09-11", validTo: "2020-09-18", isolationRequired: true}),
        new IsolationRequirement({countryCode: "LT", validFrom: "2020-09-11", validTo: "2020-09-18", isolationRequired: false})
    ]

    it('should find isolation requirement if dateOfExit fits first', () => {
        const requirement = findRequirement(isolationRequirements, "ES", "2020-09-05")
        expect(requirement.countryCode).to.eql('ES');
        expect(requirement.validFrom).to.eql("2020-09-04");
        expect(requirement.isolationRequired).to.be.false;
    })

    it('should find isolation requirement if dateOfExit fits last', () => {
        const requirement = findRequirement(isolationRequirements, "ES", "2020-09-12")
        expect(requirement.countryCode).to.eql('ES');
        expect(requirement.validFrom).to.eql("2020-09-11");
        expect(requirement.isolationRequired).to.be.true;
    })

    it('should return undefined if dateOfExit fits none', () => {
        const requirement = findRequirement(isolationRequirements, "ES", "2020-09-04")
        expect(requirement).to.be.an('undefined')
    })

    it('should return undefined if countryCode fits none', () => {
        const requirement = findRequirement(isolationRequirements, "AU", "2020-09-05")
        expect(requirement).to.be.an('undefined')
    })
})
