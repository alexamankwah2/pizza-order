import axios from 'axios';
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Featured from "../components/Featured";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";

export default function Home({productList, admin}) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>The Pizza Restaurant in New York</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {<AddButton setClose={setClose} />}
      {admin && <span>Hello</span>}
      <ProductList productList={productList}/>
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }  
  
  const res = await axios.get('http://localhost:3000/api/products')
  return{
    props:{
      productList:res.data
    }
  }
}