import './Composition.css';
import Footer from '../../components/composition/Footer';
import Header from '../../components/composition/Header';

export function Composition({ children }) {
  return (
    <div className="composition">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
