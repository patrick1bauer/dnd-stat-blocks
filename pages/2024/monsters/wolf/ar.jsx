import styles from "@/styles/ar.module.css";

export default function AugmentedReailty() {

  return (
    <div>
      <iframe className={styles.arWindow} src="/2024/monsters/wolf/ar.html"/>
    </div>
  );
}