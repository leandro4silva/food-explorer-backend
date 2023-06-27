"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const AppErrpr_1 = require("./utils/AppErrpr");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.routes);
app.use((error, request, response, next) => {
    if (error instanceof AppErrpr_1.AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});
const PORT = process.env.SERVER_PORT || 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
