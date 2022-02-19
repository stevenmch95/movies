import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery } from '../hooks/useQuery';


export function Search() {
    const navigate = useNavigate();
    const query = useQuery();
    const search = query.get("search");

    const handleSubmit = (e) => {
        e.preventDefault(); //elimina  compotamiento por defecto del submit para que no refresque la ventana
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.searchInput} //El valor del input esta siendo controlado mediente el estado de una variable
                    type="text"
                    value={search?search:""}
                    placeholder= "Buscar"
                    aria-label="Buscar peliculas"
                    onChange={
                        (e) => {
                            const value = e.target.value;
                            navigate('/?search=' + value);
                        }
                    }
                />
                <button className={styles.searchButton} type="submit">
                    <FaSearch size={20} />
                </button>
            </div>
        </form >
    )
}
