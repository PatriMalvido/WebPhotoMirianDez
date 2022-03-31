import { Route } from 'react-router-dom';
import '../styles/App.scss';
import Header from './Header';
import Main from './Main';
import Section from './Section';
import Footer from './Footer';
import Contact from './Contact';
import About from './About';
import Collections from './Collections';
import { Data } from '../variables/Data';

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Header />
        <Main />
        <Section />
        <Footer />
      </Route>

      <Route path="/contact" exact>
        {/* <Header />  */}
        <Contact />
      </Route>

      <Route path="/about" exact>
        <Header/>
        <About />
      </Route>
      <Route path="/collections" exact>
        <Header/>
        <Collections slides={Data} />
      </Route>

    </div>
  );
}

export default App;
