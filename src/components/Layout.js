import { Outlet } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function Layout({children}) {
    return(
        <>
        <h1>James bond</h1>
        <input></input>
        <main>
            {children}
            
        </main>

        </>
    )
}