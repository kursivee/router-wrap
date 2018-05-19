let routers = [];

module.exports.push = function(path, router) {
    routers.push({
        path: path,
        router: router
    });
}

module.exports.getRouters = function() {
    return routers;
}