"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpiceWorksPosts = exports.getYozmPosts = exports.getVelogPosts = void 0;
var axios_1 = require("axios");
var nanoid_1 = require("nanoid");
var cheerio = require("cheerio");
var _axios = function (_a) {
    var url = _a.url;
    return __awaiter(void 0, void 0, void 0, function () {
        var response, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4, axios_1.default.get(url)];
                case 1:
                    response = _b.sent();
                    return [2, cheerio.load(response.data)];
                case 2:
                    e_1 = _b.sent();
                    console.error(e_1);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
};
var getVelogPosts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var $_1, $posts, posts_1, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, _axios({ url: 'https://velog.io' })];
            case 1:
                $_1 = (_a.sent());
                $posts = $_1('.sc-jgrJph');
                posts_1 = [];
                $posts.each(function (_, el) {
                    var $el = $_1(el);
                    var $title = $el.find('.sc-hUpaCq h4');
                    var $description = $el.find('.sc-hUpaCq p');
                    var $link = $el.find('.sc-hUpaCq');
                    var $image = $el.find('.sc-hUpaCq img');
                    posts_1.push({
                        id: (0, nanoid_1.nanoid)(),
                        title: $title.text(),
                        description: $description.text(),
                        link: "https://velog.io".concat($link.attr('href')),
                        image: $image.attr('src'),
                    });
                });
                res.send(posts_1);
                return [3, 3];
            case 2:
                e_2 = _a.sent();
                console.log(e_2);
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.getVelogPosts = getVelogPosts;
var getYozmPosts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var $_2, $posts, posts_2, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, _axios({ url: 'https://yozm.wishket.com/magazine' })];
            case 1:
                $_2 = (_a.sent());
                $posts = $_2('.list-item');
                posts_2 = [];
                $posts.each(function (_, el) {
                    var $el = $_2(el);
                    var $title = $el.find('.item-title');
                    var $description = $el.find('.item-main p');
                    var $link = $el.find('.list-item-thumbnail a');
                    var $image = $el.find('.thumbnail-image');
                    posts_2.push({
                        id: (0, nanoid_1.nanoid)(),
                        title: $title.text(),
                        description: $description.text(),
                        link: "https://yozm.wishket.com".concat($link.attr('href')),
                        image: "https://yozm.wishket.com".concat($image.attr('src')),
                    });
                });
                res.send(posts_2);
                return [3, 3];
            case 2:
                e_3 = _a.sent();
                console.log(e_3);
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.getYozmPosts = getYozmPosts;
var getSpiceWorksPosts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var $_3, $posts, posts_3, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, _axios({ url: 'https://community.spiceworks.com' })];
            case 1:
                $_3 = (_a.sent());
                $posts = $_3('.topic-card');
                posts_3 = [];
                $posts.each(function (_, el) {
                    var $el = $_3(el);
                    var $title = $el.find('.generic-card__header a');
                    var $link = $el.find('.generic-card__thumbnail a').attr('href');
                    var $image = $el.find('.generic-card__thumbnail a').attr('style');
                    var formatedImage = $image.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/gi);
                    posts_3.push({
                        id: (0, nanoid_1.nanoid)(),
                        title: $title.text(),
                        description: null,
                        link: "https://community.spiceworks.com".concat($link),
                        image: formatedImage[0],
                    });
                });
                res.send(posts_3);
                return [3, 3];
            case 2:
                e_4 = _a.sent();
                console.error(e_4);
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.getSpiceWorksPosts = getSpiceWorksPosts;
//# sourceMappingURL=posts.service.js.map