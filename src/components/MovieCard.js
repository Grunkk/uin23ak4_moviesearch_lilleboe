export default function MovieCard({title, img, plot, year, genre, director, actors}){
    return (
        <article className="movie-card">
            <h2>{title}</h2>
            <img src={img === "N/A" ? "https://cdn.pixabay.com/photo/2016/11/03/14/18/stamp-1794352_960_720.png" : img} alt={title} />
            <h4>Plot</h4>
            <p>{plot}</p>

            <h4>Additional info</h4>
            <ul>
                <li><b>Release year:</b> {year}</li>
                <li><b>Genre:</b> {genre}</li>
                <li><b>Director:</b> {director}</li>                
                <li><b>Actors:</b> {actors}</li>
            </ul>
            
        </article>
        //bilde er hentet fra https://cdn.pixabay.com/photo/2016/11/03/14/18/stamp-1794352_960_720.png
    )
}