import Layout from "../components/Layout";
import Image from "next/image";
import { env } from "../next.config";
export default function Home({ articles, error }) {
  console.log(error);
  return (
    <Layout title="News App - Home" description="articles description" footer>
      <div>
        {articles.length === 0 && <p>No tenemos articulos</p>}
        {articles.map((el, i) => (
          <div key={i}>
            <h2>{el.title}</h2>
            <p>Author: {el.author === null ? "Sin Datos" : el.author}</p>
            {
              <Image
                src={
                  el.urlToImage === null
                    ? "https://placeimg.com/1200/300/people"
                    : el.urlToImage
                }
                width={1200}
                height={300}
                alt={`Image ${el.title}`}
                quality={50}
                layout="responsive"
                priority={i < 2}
                blurDataURL="blur"
              />
            }
            <p>{el.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=cu&apiKey=${env.customKey}`,
    {
      method: "GET",
    }
  );
  const { articles } = await res.json();
  const error = (res.statusCode = 404);

  return {
    props: {
      articles,
      error,
    },
  };
}
