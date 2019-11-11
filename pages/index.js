import React from "react";
import Head from "next/head";
import App from "../components/App";
import "./index.css";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        rel="stylesheet"
      />
    </Head>
    <App />
  </div>
);

export default Home;
