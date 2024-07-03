"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
const handler = (req, res) => {
    return res.json({ message: "Hey the F#% your api is working !!" });
};
app.get("/", handler);
app.listen(PORT, () => {
    console.log("App is listening on the PORT : 3000");
});
