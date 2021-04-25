import { Server } from "miragejs";

export const generateSeeds = (server: Server) => {
  server.createList("article", 15);
  server.createList("user", 15);
};
