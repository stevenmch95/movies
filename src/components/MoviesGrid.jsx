import { MoviesCard } from './MovieCard';
import styles from './MovieGrid.module.css'
import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { Spinner } from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NoResult } from './NoResult';



export function MoviesGrid({ search }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setpage] = useState(1);
    const [hasMore, setHasMore] = useState(true);


    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search
            ? "/search/movie?query=" + search + "&page=" + page
            : "/discover/movie?page=" + page;
        get(searchUrl).then((data) => {
            setMovies((prevMovies) => prevMovies.concat(data.results));
            setHasMore(data.page <= data.total_pages);
            setIsLoading(false);
        });
    }, [search, page]);

    if (!isLoading && movies.length===0) {
        return <NoResult />
        
    }

    return (
        <InfiniteScroll
            dataLength={movies.length}
            hasMore={hasMore}
            next={() => setpage((prevPage) => prevPage + 1)}
            loader={<Spinner />}
        >
            <ul className={styles.moviesGrid}>
                {movies.map((movie) => (
                    <MoviesCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </InfiniteScroll >
    );
}