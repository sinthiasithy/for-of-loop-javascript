let google = [
      {
        "address_components": [
          {
            "long_name": "1600",
            "short_name": "1600",
            "types": ["street_number"]
          },
          {
            "long_name": "Amphitheatre Parkway",
            "short_name": "Amphitheatre Pkwy",
            "types": ["route"]
          },
          {
            "long_name": "Mountain View",
            "short_name": "Mountain View",
            "types": ["locality", "political"]
          },
          {
            "long_name": "Santa Clara County",
            "short_name": "Santa Clara County",
            "types": ["administrative_area_level_2", "political"]
          },
          {
            "long_name": "California",
            "short_name": "CA",
            "types": ["administrative_area_level_1", "political"]
          },
          {
            "long_name": "United States",
            "short_name": "US",
            "types": ["country", "political"]
          },
          {
            "long_name": "94043",
            "short_name": "94043",
            "types": ["postal_code"]
          }
        ]
      }
    ]
  ;
  

//   console.log(google);
//   console.log(google.results);
//   console.log(google.results[0]);
// console.log(google.results[0].place_id);
// console.log(google.results[0].types);
// console.log(google.results[0].geometry);
for(propty  of google){
  console.log(propty);
}