"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = __importDefault(require("fastify"));
var fastify_socket_io_1 = __importDefault(require("fastify-socket.io"));
var server = (0, fastify_1.default)();
server.register(fastify_socket_io_1.default, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"],
    },
});
server.ready().then(function () {
    // 接続時
    server.io.on("connection", function (socket) {
        console.log("login:" + socket.id);
        // クライアントからの送信時
        socket.on("post", function (msg) {
            // 接続ユーザー全員に送信
            server.io.emit("member-post", msg);
        });
        // 切断時
        socket.on("disconnect", function (reason) {
            console.log("disconnect:" + reason);
        });
    });
});
server.listen(3000, function () {
    console.log("listening on *:3000");
});
