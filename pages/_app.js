import { useEffect, useState } from "react";
import Layout from "../comps/Layout";
import "../styles/globals.css";
import Animation from "../comps/animation";

function MyApp({ Component, pageProps }) {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      {Loading ? (
        <Animation />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </div>
  );
}

export default MyApp;
