import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";


export function App() {
    return (
        <Router>
            <header>
                <Link to="/"><h1 className={styles.tittleNeo}>Peliculas</h1> </Link>
            </header>
            <main>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/movies/:movieId" element={<MovieDetails />} />
                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
            </main>
        </Router>
    );
}
