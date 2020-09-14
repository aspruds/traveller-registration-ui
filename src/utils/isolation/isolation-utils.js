import moment from 'moment';

/**
 * Isolation requirement is valid for one week, it applies from the next day.
 * For example, if a new requirement is published on Friday, it is effective from Saturday
 * until the end of next Friday.
 */
export const requirementApplies = (isolationRequirement, dateOfExit) => {
    return moment(dateOfExit).isAfter(isolationRequirement.validFrom) &&
    moment(dateOfExit).isSameOrBefore(isolationRequirement.validTo)
}

export const findRequirement = (isolationRequirements, countryCode, dateOfExit) => {
    const countryRequirements = isolationRequirements
        .filter(r => r.countryCode === countryCode)
    return countryRequirements.find(r => requirementApplies(r, dateOfExit))
}

const shouldIsolate = (isolationRequirements, countryCode, dateOfExit) => {
    // sanity checks
    if(dateOfExit == null) {
        throw 'dateOfExit is empty'
    }

    if(countryCode == null) {
        throw 'countryCode is empty'
    }

    if(isolationRequirements == null
        || !Array.isArray(isolationRequirements)
        || isolationRequirements.length == 0) {
        throw 'isolationRequirements not a non-empty array'
    }

    const requirement = findRequirement(isolationRequirements, countryCode, dateOfExit)

    if(requirement !== undefined) {
        return requirement.isolationRequired
    } else {
        return true
    }
}
export default shouldIsolate