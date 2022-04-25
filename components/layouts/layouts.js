import Header from '../common/header/header';
import Footer from '../common/footer/footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
