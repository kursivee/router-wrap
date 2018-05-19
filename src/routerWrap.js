const routerStore = require('routerStore');

export function register(path, router) {
    routerStore.push(path, router);
}

export function connect(app) {
    routerStore.getRouters().forEach((router) => {
        app.use(router.path, router.router);
    });
}