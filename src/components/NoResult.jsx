import styles from "./NoResult.module.css";

export function NoResult() {
    return (
        <div className={styles.empty}>
            No se encontraron resultados
        </div>
    )
}
