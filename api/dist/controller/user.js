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
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoController = exports.HomeController = exports.gamingController = exports.trendingController = void 0;
const user_1 = require("../service/user");
const trendingController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const authorization = ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]) || "";
    try {
        const result = yield (0, user_1.getTrendingData)(authorization);
        res.status(200).send(result);
    }
    catch (error) {
        console.log("trendingController Error:", error);
    }
});
exports.trendingController = trendingController;
const gamingController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const authorization = ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]) || "";
    try {
        const result = yield (0, user_1.getGamingData)(authorization);
        res.status(200).send(result);
    }
    catch (error) {
        console.log("gamingController Error:", error);
    }
});
exports.gamingController = gamingController;
const HomeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const searched = typeof req.query.searched === "string" ? req.query.searched : "";
    console.log("searched:", searched);
    const authorization = ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]) || "";
    try {
        const result = yield (0, user_1.getHomeData)(authorization, searched);
        res.status(200).send(result);
    }
    catch (error) {
        console.log("HomeController Error:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});
exports.HomeController = HomeController;
const videoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const authorization = ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]) || "";
    const id = req.params.id;
    console.log(id);
    try {
        const result = yield (0, user_1.videoData)(authorization, id);
        res.status(200).send(result);
    }
    catch (error) {
        console.log("HomeController Error:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});
exports.videoController = videoController;
