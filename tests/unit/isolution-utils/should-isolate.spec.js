import {expect} from 'chai'
import {IsolationRequirement} from "@/models/IsolationRequirement";
import shouldIsolate from '@/utils/isolation/isolation-utils'

describe('isolation-utils.shouldIsolate', () => {
    const isolationRequirements = [
        new IsolationRequirement({countryCode: "ES", validFrom: "2020-09-04", validTo: "2020-09-11", isolationRequired: false}),
        new IsolationRequirement({countryCode: "ES", validFrom: "2020-09-11", validTo: "2020-09-18", isolationRequired: true}),
        new IsolationRequirement({countryCode: "EE", validFrom: "2020-09-11", validTo: "2020-09-18", isolationRequired: true}),
        new IsolationRequirement({countryCode: "LT", validFrom: "2020-09-11", validTo: "2020-09-18", isolationRequired: false})
    ]

    it('should find isolation requirement if dateOfExit fits first', () => {
        const isolationRequired = shouldIsolate(isolationRequirements, "ES", "2020-09-05")
        expect(isolationRequired).to.be.false;
    })

    it('should find isolation requirement if dateOfExit fits last', () => {
        const isolationRequired = shouldIsolate(isolationRequirements, "ES", "2020-09-12")
        expect(isolationRequired).to.be.true;
    })

    it('should find isolation requirement if dateOfExit fits none', () => {
        const isolationRequired = shouldIsolate(isolationRequirements, "ES", "2020-09-01")
        expect(isolationRequired).to.be.true;
    })

    it('should find isolation requirement if countryCode fits none', () => {
        const isolationRequired = shouldIsolate(isolationRequirements, "AU", "2020-09-05")
        expect(isolationRequired).to.be.true;
    })
})
