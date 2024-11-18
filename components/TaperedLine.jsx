import styles from "@/styles/taperedLine.module.css";

export default function TaperedLine() {
    return (
        <svg height="5" width="100%" className={styles.taperedRule}>
            <polyline points="0,0 400,2.5 0,5"></polyline>
        </svg>
    );
}