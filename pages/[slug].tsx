import React from "react";
import Head from "next/head";

import { GetServerSideProps } from "next";

export default function Post({ data, errorCode }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{"console log post"}</div>
    </>
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
