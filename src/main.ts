//main.ts
import { Post } from "./interface";
import { toggleCommentLike, getLikedComments } from "./utils";
const initialPost: Post = {
  id: "p1",
  title: "TypeScript学習中!",
  comments: [
    { id: "c1", content: "いいですね！", isLiked: false },
    { id: "c2", content: " shの意味わかりやすいです", isLiked: false },
  ],
};

const toggledPost = toggleCommentLike(initialPost, "c2");
console.log(toggledPost);
console.log(initialPost);
const likedComments = getLikedComments(toggledPost);
console.log(likedComments);