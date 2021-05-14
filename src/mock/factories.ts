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
    title: (index: number) => `Article title - #${index + 1}`,

    /**
     * Generates content
     */
    content: () => faker.lorem.paragraph(2),

    /**
     * Generates an author name
     */
    author: () => faker.name.firstName(),

    /**
     * Generates comments
     */
    comments: () => faker.datatype.number().toString(),

    /**
     * Generates likes
     */
    likes: () => faker.datatype.number().toString(),

    /**
     * Generates shares
     */
    shares: () => faker.datatype.number().toString(),
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
