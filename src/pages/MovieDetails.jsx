import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";
import placeholder from "../placeholder.jpg";

export function MovieDetails() {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);


    useEffect(() => {
        setIsLoading(true);
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
            setIsLoading(false);
        });
    }, [movieId])

    if (isLoading) {
        return <Spinner />
    }


    const imageUrl = movie.poster_path ? 'https://image.tmdb.org/t/p/w300' + movie.poster_path : placeholder;
    return <div className={styles.detailsContainer}>
        <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={'Pelicula:' + movie.title} />
        <div className={`${styles.col} ${styles.movieDetails}`}>
            <p className={styles.firstItem} ><strong>Pelicula: </strong> {movie.title}</p>
            <p> <strong>Géneros: </strong>{movie.genres.map((genero) => genero.name).join(", ")}</p>
            <p><strong>Descripción: </strong> {movie.overview}</p>
        </div>
    </div>
}