import Head from "next/head";
import Link from "next/link";
import styles from "./[slug].module.scss";

export default function Home() {
  return (
    <main className={styles["Page__Content"]}>
      <Head>
        <title>Hackernoon CLON</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Container}>
        <h1>
          <Link href="/step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd">
            <a>CLICK HERE TO SEE THE POST</a>
          </Link>
        </h1>
      </div>
    </main>
  );
}
