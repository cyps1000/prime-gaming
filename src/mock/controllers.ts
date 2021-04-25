import { Model, Registry, Request } from "miragejs";
import Schema from "miragejs/orm/schema";
import { ModelDefinition } from "miragejs/-types";

/**
 * For typescript to infer the types properly, we need to have factory entries that match what we want to use in the seeds.
 * @see https://github.com/miragejs/miragejs/issues/682
 */

/**
 * Defines the article type
 */
type Article = {
  title: string;
  content: string;
  author: string;
};

/**
 * Defines the user type
 */
type User = {
  email: string;
  name: string;
};

/**
 * Defines the article model
 */
const ArticleModel: ModelDefinition<Article> = Model.extend({});

/**
 * Defines the user model
 */
const UserModel: ModelDefinition<User> = Model.extend({});

/**
 * Defines the Models type
 */
type Models = {
  article: typeof ArticleModel;
  user: typeof UserModel;
};

/**
 * Defines the Factories type
 */
type Factories = {
  article: typeof ArticleModel;
  user: typeof UserModel;
};

/**
 * Defines the App registry
 */
type AppRegistry = Registry<Models, Factories>;

/**
 * Defines the custom AppSchema
 */
type AppSchema = Schema<AppRegistry>;

export const RoutesHandler = {
  /**
   * ARTICLE ROUTES
   * ************************************************************************
   */

  /**
   * Gets all the articles
   * @public
   * GET - /v1/articles
   */
  getArticles: async (schema: AppSchema, request: Request) => {
    return schema.all("article");
  },

  /**
   * Gets a specific article based on ID
   * @public
   * GET - /v1/articles/:id
   */
  getArticle: async (schema: AppSchema, request: Request) => {
    return schema.find("article", request.params.id);
  },

  /**
   * Creates an article
   * @public
   * POST - /v1/articles
   */
  createArticle: async (schema: AppSchema, request: Request) => {
    const attrs = JSON.parse(request.requestBody);
    return schema.create("article", attrs);
  },

  /**
   * Updates an article based on ID
   * @public
   * PUT - /v1/articles/:id
   */
  updateArticle: async (schema: AppSchema, request: Request) => {
    const newAttrs = JSON.parse(request.requestBody);
    const id = request.params.id;
    const article = schema.find("article", id);

    return article?.update(newAttrs);
  },

  /**
   * Deletes an article based on ID
   * @public
   * DELETE - /v1/articles/:id
   */
  deleteArticle: async (schema: AppSchema, request: Request) => {
    const id = request.params.id;
    return schema.find("article", id)?.destroy();
  },

  /**
   * USER ROUTES
   * ************************************************************************
   */

  /**
   * Gets a specific user based on ID
   * @public
   * GET - /v1/users/:id
   */
  getUser: async (schema: AppSchema, request: Request) => {
    return schema.find("user", request.params.id);
  },
};
