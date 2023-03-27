export default function MovieCard({title, img}){
    return (
        <article>
            <h3>{title}</h3>
            <img src={img == "N/A" ? "https://cdn.pixabay.com/photo/2016/11/03/14/18/stamp-1794352_960_720.png" : img} alt={title} />
            
        </article>
        //bilde er hentet fra https://cdn.pixabay.com/photo/2016/11/03/14/18/stamp-1794352_960_720.png
    )
}