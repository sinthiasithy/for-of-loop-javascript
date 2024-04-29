let sarver = {
    "posts": [
      { "id": 1, "title": "Post 1" },
      { "id": 2, "title": "Post 2" },
      { "id": 3, "title": "Post 3" }
    ],
    "comments": [
      { "id": 1, "body": "Comment 1", "postId": 1 },
      { "id": 2, "body": "Comment 2", "postId": 1 },
      { "id": 3, "body": "Comment 3", "postId": 2 }
    ]
  }
  
// console.log(sarver.posts);
// console.log(sarver.posts[0]);
// console.log(sarver.posts[0].title);
// console.log(sarver.posts[0].id);
// console.log(sarver.comments);
 for(propty  of sarver.comments){   
  console.log(propty);                     
}