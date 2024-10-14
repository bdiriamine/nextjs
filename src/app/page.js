import styles from "./page.module.css";

import { cookies } from 'next/headers';
import Navbar from "./components/navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";

export default async function Home() {
  // Fetch products from the API
  const response = await fetch('http://localhost:3000/api/product');
  const data = await response.json();
  
  // Get the token from cookies
  const cookieStore = cookies();
  const token = cookieStore?.get('token')?.value || '';

  return (
    <>
      <Navbar token={token} />
      <MainContent products={data.products || []} token={token} />
      <footer className={styles.footer}></footer>
    </>
  );
}

