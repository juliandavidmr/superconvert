import Link from "next/link";
import styles from "./header.module.scss";

export const Header = ({ title }: { title: string }) => {
    return (
        <div className={styles.header}>
            <Link href='/'>
                <a className={styles.link}>Home</a>
            </Link>

            <span className={styles.title}>{title}</span>
        </div>
    );
}
