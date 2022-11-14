import styles from "./AppHeader.module.css";

export function AppHeader() {
    return (
        <header className={styles.wrapper}>
            <h1><a href="https://adventofcode.com/" rel="noreferrer" target="_blank" >Advent of Code 2022</a></h1>

            <div className={styles.divider} />
            <h1>
                <a href="https://github.com/LouisH98" rel="noreferrer" target="_blank">
                    Louis H.
                </a>
            </h1>
        </header>
    )
}