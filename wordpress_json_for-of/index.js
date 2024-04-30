let wordpress = [
{
    "id": 1,
    "date": "2023-04-14T01:24:32",
    "title": {
      "rendered": "Hello, World!"
    },
    "content": {
      "rendered": "<p>This is a sample post content.</p>"
    },
    "excerpt": {
      "rendered": "<p>This is a sample post excerpt.</p>"
    },
    "author": 1,
    "categories": [5, 9],
    "tags": [12, 15],
    "featured_image": "https://example.com/image.jpg",
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/wp/v2/posts/1"
        }
      ],
      "author": [
        {
          "href": "https://example.com/wp-json/wp/v2/users/1"
        }
      ],
      "replies": [
        {
          "href": "https://example.com/wp-json/wp/v2/comments?post=1"
        }
      ]
    }
  }
]
// 
//   console.log(wordpress);
// console.log(wordpress.id);
// console.log(wordpress.date);
// console.log(wordpress.title);
// console.log(wordpress.title.rendered);
for(propty of wordpress){
  console.log(propty)
  console.log(wordpress[propty]);
}