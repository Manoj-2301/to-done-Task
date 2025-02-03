
import styles from "./page.module.css";
import Leftnav from './left/leftnav';
import CenterNav from "./middle/CenterNav";

export default function Home() {
  return (
    <div className={styles.page}>
      <Leftnav/>
      <CenterNav/>
    </div>
  );
}
