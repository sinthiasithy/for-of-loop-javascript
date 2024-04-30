let twitter = [
 {
    "created_at":"Thu Apr 14 01:24:32 +0000 2023",
    "id": 1234567890123456789,
    "text": "This is a tweet from user sin.",
    "user": {
      "id": 987654321,
      "name": "Sinatra",
      "screen_name": "sin",
      "location": "New York, USA",
      "followers_count": 1000,
      "friends_count": 500,
      "verified": false
    },
    "retweet_count": 10,
    "favorite_count": 20,
    "hashtags": ["sample", "twitter"],
    "mentions": ["exampleuser"],
    "urls": ["https://example.com"],
    "retweeted": false,
    "favorited": false
  }
]

for (let key of twitter) {
  console.log(key);
}