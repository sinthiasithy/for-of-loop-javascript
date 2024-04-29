let youtube = {
    "kind": "youtube#videoListResponse",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/O2VlKQolBD2M6bljZUwTwYQkDWg\"",
    "pageInfo": {
      "totalResults": 1,
      "resultsPerPage": 1
    },
    "items": [
      {
        "kind": "youtube#video",
        "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/5v7mmxWlr6az0ZQmVp3GZy7rKVU\"",
        "id": "VIDEO_ID",
        "snippet": {
          "publishedAt": "2023-04-14T01:24:32Z",
          "channelId": "CHANNEL_ID",
          "title": "Video Title",
          "description": "This is a description of the video.",
          "thumbnails": {
            "default": {
              "url": "https://example.com/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://example.com/medium.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://example.com/high.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Channel Title",
          "tags": ["tag1", "tag2", "tag3"],
          "categoryId": "CATEGORY_ID",
          "liveBroadcastContent": "none"
        }
      }
    ]
  };
//   console.log(youtube);
// console.log(youtube.kind);
// console.log(youtube.etag);
// console.log(youtube.pageInfo);
 for(propty of youtube.items){
   console.log(propty);
 }