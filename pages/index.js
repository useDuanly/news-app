import Layout from "../components/Layout";

import Image from "next/future/image";
import styles from "../styles/Home.module.css";

export default function Home({ articles }) {
  return (
    <Layout title="News App - Home" description="articles description" footer>
      <div>
        {articles.length === 0 && <p>No tenemos articulos</p>}
        {articles.map((el, i) => (
          <div key={i}>
            <h2>{el.title}</h2>
            <p>Author: {el.author}</p>
            <img src={el.urlToImage} alt={`images title ${el.title}`} />
            <p>{el.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const API_KEY = "fff7f3d2b9054cf6ba44bcfac086b121";
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=Apple&from=2022-08-16&sortBy=popularity&apiKey=${API_KEY}`,
    {
      method: "GET",
    }
  );
  const { articles } = await res.json();
  const error = res.ok.status;

  return {
    props: {
      articles,
    },
  };
}
