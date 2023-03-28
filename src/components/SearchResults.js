import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"

export default function SearchMovies(){

    const [printmovies, setPrint] = useState([])
    const [input, setInput] = useState("james-bond")


    const getMovies = async() =>{
        if(input.length >= 3){

        const response = await fetch(`http://www.omdbapi.com/?apikey=80218af1&type=movie&s=${input.toLowerCase().replace(" ", "-")}`)
        const data = await response.json()
        console.log("data search", data?.Search)
        
        const moviesearch = data?.Search

        const resultat = moviesearch.map((items => items?.imdbID))

        const realmovies = await Promise.all(resultat.map(id => (
            fetch(`http://www.omdbapi.com/?apikey=80218af1&type=movie&i=${id}`)
        )))

        const realrealmovies = await Promise.all(realmovies.map(movieresponse => (
            movieresponse.json()
        )))
        
        setPrint(realrealmovies)

        console.log("data", data)
    }else{
        alert("Du kan ikke søke med mindre enn 3 tegn")

        setInput("james-bond")
    }
    }

    useEffect(() =>{
        getMovies()
    },[])

    console.log("printmovies", printmovies)
    console.log("input", input)

    return(
        <> 
        <nav>
         <input type="text" placeholder="james bond.." name="search" onChange={e => setInput(e.target.value)} />
            <button onClick={getMovies}>Søk</button>
        </nav>    
        <section class="movie-container" >
            {printmovies?.map((item, index) =>(
                <MovieCard key={index} title={item?.Title} img={item?.Poster} plot={item?.Plot} year={item?.Year} genre={item?.Genre} director={item?.Director} actors={item?.Actors}/>
            ))}
        </section>
        </>
    )
}