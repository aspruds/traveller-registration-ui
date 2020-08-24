export function createTransportDetails() {
    return {
        carrierType: "plane",
        flightNumber: "BT104",
        dateOfEntry: new Date().toISOString().substr(0, 10)
    }
}