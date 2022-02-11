import Socials from "./Socials";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Socials />
      <Footer />
    </div>
  );
};

export default Layout;
