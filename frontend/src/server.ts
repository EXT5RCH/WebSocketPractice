import fastify from "fastify";
import fastifyStatic from "fastify-static";
import path from "path";
const __dirname = path.resolve();

const server = fastify();
server.register(fastifyStatic, {
  root: path.join(__dirname, "."),
  prefix: "/",
});

server.get("/", (_req, reply) => {
  reply.type("text/html").code(200);
  reply.sendFile("view/index.html");
});

server.listen(8080, () => {
  console.log("listening on *:8080");
});
