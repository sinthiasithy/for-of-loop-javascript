
let databass ={
    "data": [
      {
        "name": "name",
        "id": "id",
        "age": "age",
        "city": "city"
      },
      {
        "name": "sin",
        "id": 1,
        "age": 30,
        "city": "New York"
      },
      {
        "name": "win",
        "id": 2,
        "age": 25,
        "city": "London"
      },
      {
        "name": "yibo",
        "id": 3,
        "age": 42,
        "city": "Paris"
      },
      {
        "name": "xoiya",
        "id": 4,
        "age": 28,
        "city": "Tokyo"
      }
    ]
  }
//   console.log(databass);
// console.log(databass.data[3].id);
// console.log(databass.data[1].name);
// console.log(databass.data[4].city)
for(propty of databass.data){
  console.log(propty);
}