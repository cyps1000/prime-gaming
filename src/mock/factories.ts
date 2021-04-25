import { Factory } from "miragejs";
import faker from "faker";

/**
 * Defines the factories
 * @see https://miragejs.com/docs/main-concepts/factories/
 */
export const factories = {
  article: Factory.extend({
    /**
     * Generates a title
     */
    title: (index: number) => `Article title - #${index}`,

    /**
     * Generates content
     */
    content: () => faker.lorem.paragraph(2),

    /**
     * Generates an author name
     */
    author: () => faker.name.firstName(),
  }),
  user: Factory.extend({
    /**
     * Generates an email
     */
    email: () => faker.internet.email(),

    /**
     * Generates a name
     */
    name: () => faker.name.firstName(),
  }),
};
