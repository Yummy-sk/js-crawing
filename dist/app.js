"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var posts_route_1 = require("./posts/posts.route");
var Server = (function () {
    function Server() {
        var app = express();
        this.app = app;
        this.port = process.env.PORT || 3000;
    }
    Server.prototype.setRoute = function () {
        this.app.use(posts_route_1.default);
    };
    Server.prototype.setMiddleware = function () {
        this.app.use(function (req, res, next) {
            console.log(req.rawHeaders[1]);
            console.log('this is logging middleware');
            next();
        });
        this.app.use(express.json());
        this.setRoute();
        this.app.use(function (req, res, next) {
            res.status(404).send('Not Found');
        });
    };
    Server.prototype.listen = function () {
        this.setMiddleware();
        this.app.listen(this.port, function () {
            console.log('server is on...');
        });
    };
    return Server;
}());
var init = function () {
    var server = new Server();
    server.listen();
};
init();
//# sourceMappingURL=app.js.map