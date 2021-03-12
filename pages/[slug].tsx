import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import ReactHtmlParser from "react-html-parser";

import styles from "./[slug].module.scss";

import StoryMeta from "../src/components/StoryMeta";
import Profile from "../src/components/Profile";
import BottomReactions from '../src/components/BottomReactions';
import Footer from '../src/components/Footer';

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
        <Profile />
        {ReactHtmlParser(data.markup)}
        <BottomReactions />
        <Footer />
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
