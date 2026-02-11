//interface.ts
export type Comment = {
  id: string;
  content: string;
  isLiked: boolean;
};

export type Post = {
  id: string;
  title: string;
  comments: Comment[];
};