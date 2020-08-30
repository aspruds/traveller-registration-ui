export function pushRoute (router, route, name) {
    if (route.name !== name) {
        router.push({ name: name })
    }
}