import * as express from 'express';
import postsRouter from './posts/posts.route';

class Server {
  public app: express.Application;
  public port: number | string;

  constructor() {
    const app = express();
    this.app = app;
    this.port = process.env.PORT || 3000;
  }

  private setRoute() {
    this.app.use(postsRouter);
  }

  private setMiddleware() {
    this.app.use(express.static('build'));

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

    this.app.listen(this.port, () => {
      console.log('server is on...');
    });
  }
}

const init = () => {
  const server = new Server();
  server.listen();
};

init();
