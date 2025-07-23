import { nhost } from './nhost';
import { 
  PostsQuery, 
  PostQuery, 
  CategoriesQuery, 
  UserQuery,
  InsertPostInput,
  UpdatePostInput,
  InsertCommentInput,
  UpdateUserInput,
  Post,
  User,
  Comment
} from '@/types/database';

// GraphQL Queries
export const GET_POSTS = `
  query GetPosts($limit: Int, $offset: Int, $status: String) {
    posts(
      limit: $limit, 
      offset: $offset, 
      where: { status: { _eq: $status } }
      order_by: { created_at: desc }
    ) {
      id
      title
      slug
      excerpt
      featured_image
      status
      view_count
      like_count
      comment_count
      is_featured
      published_at
      created_at
      updated_at
      tags
      author {
        id
        full_name
        avatar_url
      }
      category {
        id
        name
        slug
        color
      }
    }
    posts_aggregate(where: { status: { _eq: $status } }) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: String!) {
    posts(where: { slug: { _eq: $slug } }, limit: 1) {
      id
      title
      slug
      content
      excerpt
      featured_image
      status
      view_count
      like_count
      comment_count
      is_featured
      published_at
      created_at
      updated_at
      tags
      meta_title
      meta_description
      author {
        id
        full_name
        avatar_url
        bio
        website
      }
      category {
        id
        name
        slug
        color
      }
      comments(
        where: { is_approved: { _eq: true } }
        order_by: { created_at: asc }
      ) {
        id
        content
        created_at
        author {
          id
          full_name
          avatar_url
        }
      }
    }
  }
`;

export const GET_CATEGORIES = `
  query GetCategories {
    categories(where: { is_active: { _eq: true } }, order_by: { name: asc }) {
      id
      name
      slug
      description
      icon
      color
    }
  }
`;

export const GET_USER = `
  query GetUser($id: uuid!) {
    user(id: $id) {
      id
      email
      full_name
      avatar_url
      bio
      website
      location
      is_verified
      is_premium
      created_at
      updated_at
    }
  }
`;

// GraphQL Mutations
export const CREATE_POST = `
  mutation CreatePost($object: posts_insert_input!) {
    insert_posts_one(object: $object) {
      id
      title
      slug
      status
      created_at
    }
  }
`;

export const UPDATE_POST = `
  mutation UpdatePost($id: uuid!, $set: posts_set_input!) {
    update_posts_by_pk(pk_columns: { id: $id }, _set: $set) {
      id
      title
      slug
      status
      updated_at
    }
  }
`;

export const DELETE_POST = `
  mutation DeletePost($id: uuid!) {
    delete_posts_by_pk(id: $id) {
      id
    }
  }
`;

export const CREATE_COMMENT = `
  mutation CreateComment($object: comments_insert_input!) {
    insert_comments_one(object: $object) {
      id
      content
      created_at
      author {
        id
        full_name
        avatar_url
      }
    }
  }
`;

export const UPDATE_USER = `
  mutation UpdateUser($id: uuid!, $set: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $set) {
      id
      full_name
      avatar_url
      bio
      website
      location
      updated_at
    }
  }
`;

// GraphQL Client Functions
export class GraphQLClient {
  private async query<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
    const response = await nhost.graphql.request(query, variables);

    if (response.error) {
      const errorMessage = Array.isArray(response.error) 
        ? response.error[0]?.message || 'GraphQL Error'
        : response.error.message || 'GraphQL Error';
      throw new Error(`GraphQL Error: ${errorMessage}`);
    }

    return response.data as T;
  }

  // Posts
  async getPosts(limit = 12, offset = 0, status = 'published'): Promise<PostsQuery> {
    return this.query<PostsQuery>(GET_POSTS, { limit, offset, status });
  }

  async getPostBySlug(slug: string): Promise<PostQuery> {
    const result = await this.query<{ posts: Post[] }>(GET_POST_BY_SLUG, { slug });
    return { post: result.posts[0] };
  }

  async createPost(input: InsertPostInput): Promise<{ insert_posts_one: Post }> {
    return this.query<{ insert_posts_one: Post }>(CREATE_POST, { object: input });
  }

  async updatePost(id: string, input: UpdatePostInput): Promise<{ update_posts_by_pk: Post }> {
    return this.query<{ update_posts_by_pk: Post }>(UPDATE_POST, { id, set: input });
  }

  async deletePost(id: string): Promise<{ delete_posts_by_pk: Post }> {
    return this.query<{ delete_posts_by_pk: Post }>(DELETE_POST, { id });
  }

  // Categories
  async getCategories(): Promise<CategoriesQuery> {
    return this.query<CategoriesQuery>(GET_CATEGORIES);
  }

  // Users
  async getUser(id: string): Promise<UserQuery> {
    return this.query<UserQuery>(GET_USER, { id });
  }

  async updateUser(id: string, input: UpdateUserInput): Promise<{ update_users_by_pk: User }> {
    return this.query<{ update_users_by_pk: User }>(UPDATE_USER, { id, set: input });
  }

  // Comments
  async createComment(input: InsertCommentInput): Promise<{ insert_comments_one: Comment }> {
    return this.query<{ insert_comments_one: Comment }>(CREATE_COMMENT, { object: input });
  }
}

// Export singleton instance
export const graphqlClient = new GraphQLClient(); 