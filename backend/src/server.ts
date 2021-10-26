import fastify from "fastify";
import fastifyIO from "fastify-socket.io";

const server = fastify();
server.register(fastifyIO, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});

server.ready().then(() => {
  // 接続時
  server.io.on("connection", (socket) => {
    console.log(`login:${socket.id}`);

    // クライアントからの送信時
    socket.on("post", (msg) => {
      // 接続ユーザー全員に送信
      server.io.emit("member-post", msg);
    });

    // 切断時
    socket.on("disconnect", (reason) => {
      console.log(`disconnect:${reason}`);
    });
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
