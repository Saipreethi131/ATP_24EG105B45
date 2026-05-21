/*ASSIGNMENT 4: 
------------
Movie Streaming Platform :
You are working on a movie recommendation system. */

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. filter() only "Sci-Fi" movies
const scifi =movies.filter(movie=>movie.genre==="Sci-Fi")
console.log("Sci-Fi Movies:",scifi)

/* 2. map() to return:
    "Inception (8.8)" */
const rating=movies.map(movie=>{
    return `${movie.title} (${movie.rating})`
})
console.log(rating)

// 3. reduce() to find average movie rating
let sum=movies.reduce((acc,movie)=>acc+movie.rating,0)
const avg=sum/movies.length;
console.log("Average Rating :",avg)

// 4. find() movie "Joker"
const find=movies.find(movie=>movie.title==="Joker")
console.log(find)

// 5. findIndex() of "Avengers"
const index=movies.findIndex(movie=>movie.title==="Avengers")
console.log("Index of Avengers:",index)