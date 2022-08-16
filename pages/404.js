import Layout from "../components/Layout";
import Link from "next/link";

export default function Error_404() {
  return (
    <Layout title="Error 404" description="404 page not found">
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </Layout>
  );
}
