import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"

export default function Main(){

    const [movies, setMovies] = useState([])


    const getMovies = async() =>{
        const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=80218af1&type=movie&s=james-bond')
        const data = await response.json()
        console.log("data search", data?.Search)
        setMovies(data?.Search)
        

        console.log("data", data)
    }

    useEffect(() =>{
        getMovies()
    },[])

   console.log("movie", movies)


    return(
        //<h3>hehe</h3>
        <>
        <h2>James bond filmer</h2>
        {movies?.map((item, index) =>(
            <MovieCard key={index} title={item?.Title} img={item?.Poster} />
        ))}
        </>
    )
}