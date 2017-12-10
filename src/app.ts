import { Server } from "./server";
import { PORT } from "./globals";

const server = Server.init();

server.app.listen(PORT);
