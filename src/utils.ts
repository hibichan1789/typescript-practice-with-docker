//utils.ts

import { Comment, Post } from "./interface";

export function toggleCommentLike(post:Post, commentId:string):Post{
    const toggledComments = post.comments.map(comment=>{
        if(comment.id !== commentId){
            return {...comment};
        }
        return {...comment, isLiked: !comment.isLiked};
    });
    return {...post, comments:toggledComments};
}

export function getLikedComments(post:Post):Comment[]{
    return post.comments.filter(comment => comment.isLiked);
}