import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";

import styles from "./[slug].module.scss";

import StoryMeta from "../src/components/StoryMeta";

export default function Post({ data }) {
  return (
    <main className={styles["Page__Content"]}>
      <Head>
        <title>{data.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Container}>
        <h1>{data.title}</h1>
        <StoryMeta />
        <div className={styles.ImageContainer}>
          <img src={data.mainImage} />
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`${process.env.API_URL}/api/post/${params.slug}`);

  if (!res.ok) {
    return { notFound: true };
  }
  const data = await res.json();

  return { props: { data } };
};
