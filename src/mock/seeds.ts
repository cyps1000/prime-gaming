import { Server } from "miragejs";

export const generateSeeds = (server: Server) => {
  server.createList("article", 1500);
  server.createList("user", 15);
};
