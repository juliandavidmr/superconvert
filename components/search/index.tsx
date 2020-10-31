import searchStyles from "./search.module.css";

export default function Search() {
    return (
        <div className={searchStyles.search_container}>
            <input type="search" name="search" className={searchStyles.search_input} />
        </div>
    );
}