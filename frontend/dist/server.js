"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = __importDefault(require("fastify"));
var fastify_static_1 = __importDefault(require("fastify-static"));
var path_1 = __importDefault(require("path"));
var __dirname = path_1.default.resolve();
var server = (0, fastify_1.default)();
server.register(fastify_static_1.default, {
    root: path_1.default.join(__dirname, "."),
    prefix: "/",
});
server.get("/", function (_req, reply) {
    reply.type("text/html").code(200);
    reply.sendFile("view/index.html");
});
server.listen(8080, function () {
    console.log("listening on *:8080");
});
