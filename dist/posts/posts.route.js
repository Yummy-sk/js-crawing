"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var posts_service_1 = require("./posts.service");
var router = (0, express_1.Router)();
router.get('/vlog', posts_service_1.getVelogPosts);
exports.default = router;
//# sourceMappingURL=posts.route.js.map