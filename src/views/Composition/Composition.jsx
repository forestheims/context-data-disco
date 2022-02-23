import './Composition.css';
import Footer from '../../components/composition/Footer';
import Header from '../../components/composition/Header';
import Instructions from '../../components/Instructions/Instructions';

export default function Composition({ children }) {
  return (
    <div className="composition">
      <div>
        <Header />
        <main>
          {children}
          <Instructions />
        </main>
      </div>
      <Footer />
    </div>
  );
}
