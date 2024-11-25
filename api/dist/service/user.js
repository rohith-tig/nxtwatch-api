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
exports.videoData = exports.getHomeData = exports.getGamingData = exports.getTrendingData = void 0;
const getTrendingData = (authorization) => __awaiter(void 0, void 0, void 0, function* () {
    const url = "https://apis.ccbp.in/videos/trending";
    const options = {
        headers: {
            Authorization: `Bearer ${authorization}`,
        },
        method: "GET",
    };
    try {
        const response = yield fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.error("trending service error:", error);
        throw new Error("Failed to fetch trending data");
    }
});
exports.getTrendingData = getTrendingData;
const getGamingData = (authorization) => __awaiter(void 0, void 0, void 0, function* () {
    const url = "https://apis.ccbp.in/videos/gaming";
    const options = {
        headers: {
            Authorization: `Bearer ${authorization}`,
        },
        method: "GET",
    };
    try {
        const response = yield fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.error("gaming service error:", error);
        throw new Error("Failed to fetch gaming data");
    }
});
exports.getGamingData = getGamingData;
const getHomeData = (authorization, searched) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("home - search query:", searched);
    const url = `https://apis.ccbp.in/videos/all/?search=${searched}`;
    const options = {
        headers: {
            Authorization: `Bearer ${authorization}`,
        },
        method: "GET",
    };
    try {
        const response = yield fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.error("Home service error:", error);
        throw new Error("Failed to fetch home data");
    }
});
exports.getHomeData = getHomeData;
const videoData = (authorization, id) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://apis.ccbp.in/videos/${id}`;
    const options = {
        headers: {
            Authorization: `Bearer ${authorization}`,
        },
        method: "GET",
    };
    try {
        const response = yield fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.error("video service error:", error);
        throw new Error("Failed to fetch video data");
    }
});
exports.videoData = videoData;
