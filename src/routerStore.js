let routers = [];

export function push(path, router) {
    routers.push({
        path: path,
        router: router
    });
}

export function getRouters() {
    return routers;
}