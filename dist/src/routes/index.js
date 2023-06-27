"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importStar(require("express"));
const UsersRoutes_1 = require("./UsersRoutes");
const SessionRoutes_1 = require("./SessionRoutes");
const DishRoutes_1 = require("./DishRoutes");
const CategorysRoutes_1 = require("./CategorysRoutes");
const FavoritesRoutes_1 = require("./FavoritesRoutes");
const upload_1 = __importDefault(require("../configs/upload"));
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use('/users', UsersRoutes_1.userRouter);
routes.use('/sessions', SessionRoutes_1.sessionRouter);
routes.use('/dishs', DishRoutes_1.dishRouter);
routes.use('/categorys', CategorysRoutes_1.categoryRoutes);
routes.use('/favorites', FavoritesRoutes_1.favoritesRouter);
routes.use('/files', express_1.default.static(upload_1.default.UPLOAD_FOLDER));
