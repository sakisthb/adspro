// Database Types for AdsPro Application

export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  bio?: string;
  website?: string;
  location?: string;
  created_at: string;
  updated_at: string;
  is_verified: boolean;
  is_premium: boolean;
  preferences: Record<string, unknown>;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  color: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featured_image?: string;
  status: 'draft' | 'published' | 'archived';
  author_id: string;
  category_id?: string;
  tags: string[];
  meta_title?: string;
  meta_description?: string;
  view_count: number;
  like_count: number;
  comment_count: number;
  is_featured: boolean;
  published_at?: string;
  created_at: string;
  updated_at: string;
  // Relations
  author?: User;
  category?: Category;
  comments?: Comment[];
  likes?: Like[];
  bookmarks?: Bookmark[];
}

export interface Comment {
  id: string;
  content: string;
  author_id: string;
  post_id: string;
  parent_id?: string;
  is_approved: boolean;
  created_at: string;
  updated_at: string;
  // Relations
  author?: User;
  post?: Post;
  parent?: Comment;
  replies?: Comment[];
}

export interface Like {
  id: string;
  user_id: string;
  post_id: string;
  created_at: string;
  // Relations
  user?: User;
  post?: Post;
}

export interface Bookmark {
  id: string;
  user_id: string;
  post_id: string;
  created_at: string;
  // Relations
  user?: User;
  post?: Post;
}

export interface Follow {
  id: string;
  follower_id: string;
  following_id: string;
  created_at: string;
  // Relations
  follower?: User;
  following?: User;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'like' | 'comment' | 'follow' | 'system';
  reference_id?: string;
  reference_type?: string;
  is_read: boolean;
  created_at: string;
  // Relations
  user?: User;
}

export interface Setting {
  id: string;
  key: string;
  value: Record<string, unknown>;
  description?: string;
  created_at: string;
  updated_at: string;
}

// GraphQL Query Types
export interface PostsQuery {
  posts: Post[];
  posts_aggregate: {
    aggregate: {
      count: number;
    };
  };
}

export interface PostQuery {
  post: Post;
}

export interface CategoriesQuery {
  categories: Category[];
}

export interface UsersQuery {
  users: User[];
}

export interface UserQuery {
  user: User;
}

// Insert/Update Types
export interface InsertPostInput {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featured_image?: string;
  status?: 'draft' | 'published' | 'archived';
  category_id?: string;
  tags?: string[];
  meta_title?: string;
  meta_description?: string;
  is_featured?: boolean;
}

export interface UpdatePostInput {
  title?: string;
  slug?: string;
  content?: string;
  excerpt?: string;
  featured_image?: string;
  status?: 'draft' | 'published' | 'archived';
  category_id?: string;
  tags?: string[];
  meta_title?: string;
  meta_description?: string;
  is_featured?: boolean;
  published_at?: string;
}

export interface InsertCommentInput {
  content: string;
  post_id: string;
  parent_id?: string;
}

export interface UpdateUserInput {
  full_name?: string;
  avatar_url?: string;
  bio?: string;
  website?: string;
  location?: string;
  preferences?: Record<string, unknown>;
} 