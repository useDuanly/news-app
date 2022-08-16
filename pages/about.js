import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout
      title="News App - Blog"
      description="blog description"
      footer={true}
    >
      <h1>Esta es una pagina de About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi maxime
        nesciunt pariatur minus commodi tenetur sint nemo ipsum, dicta
        necessitatibus nostrum animi excepturi unde ea deleniti ullam
        repellendus aperiam architecto.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, sequi
        ipsum voluptatibus sint neque voluptatum aliquam voluptas explicabo
        animi fuga laboriosam sit non dolore eaque laudantium dolorum dicta
        necessitatibus officiis?
      </p>
    </Layout>
  );
}
