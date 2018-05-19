const routerStore = require('./routerStore');

exports.register = function (path, router) {
    routerStore.push(path, router);
}

exports.connect = function (app) {
    routerStore.getRouters().forEach((router) => {
        app.use(router.path, router.router);
    });
}