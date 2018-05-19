Library to connect routers across multiple files

// someRouter.js

router.get('/', ...do something)

register('/path', router);

// server.js

const app = express();
connect(app);
app.listen(...app params);