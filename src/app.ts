import * as express from 'express';
import postsRouter from './posts/posts.route';

class Server {
  public app: express.Application;

  constructor() {
    const app = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(postsRouter);
  }

  private setMiddleware() {
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log('this is logging middleware');
      next();
    });

    this.app.use(express.json());

    this.setRoute();

    this.app.use((req, res, next) => {
      res.status(404).send('Not Found');
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(3000, () => {
      console.log('server is on...');
    });
  }
}

const init = () => {
  const server = new Server();
  server.listen();
};

init();
