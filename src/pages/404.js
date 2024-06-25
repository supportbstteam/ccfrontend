import Link from "next/link";
import Layout from '@/components/Layout';
function page404(){
    return (
        <>
        <Layout title="404 Page" metaDescription="Page Not Found in Charge Construct.">
        <div align="center" class="py-5">
          <h1>404 - Page Not Found</h1>
          <p>It seems we can't find what you're looking for. Perhaps searching can help.</p>
          <Link href="/">
          Go back home
          </Link>
        </div>
        </Layout>
        </>
      );
}

export default page404;