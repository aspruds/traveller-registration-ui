import {expect} from 'chai'
import {IsolationRequirement} from "@/models/IsolationRequirement";
import {requirementApplies} from '@/utils/isolation/isolation-utils'

describe('isolation-utils.requirementApplies', () => {
    const requirement = new IsolationRequirement(
        {
            countryCode: "ES",
            validFrom: "2020-09-04",
            validTo: "2020-09-11",
            isolationRequired: false
        });

    it('should return false if dateOfExit is smaller than validFrom', () => {
        const applies = requirementApplies(requirement, "2020-09-03")
        expect(applies).to.be.false;
    })

    it('should return false if dateOfExit is equal to validFrom', () => {
        const applies = requirementApplies(requirement, "2020-09-04")
        expect(applies).to.be.false;
    })

    it('should return true if dateOfExit is in range', () => {
        const applies = requirementApplies(requirement, "2020-09-05")
        expect(applies).to.be.true;
    })

    it('should return true if dateOfExit equals validTo', () => {
        const applies = requirementApplies(requirement, "2020-09-11")
        expect(applies).to.be.true;
    })

    it('should return false if dateOfExit is greater than validTo', () => {
        const applies = requirementApplies(requirement, "2020-09-12")
        expect(applies).to.be.false;
    })
})
