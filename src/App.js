import './App.css';
import { Menu } from './components/Menu/Menu';
import { NavMenu } from './components/Menu/NavMenu'
import { FrontPage } from './components/FrontPage/FrontPage';
import { Skills } from "./components/Skills/Skills";
import { Studies } from "./components/Studies/Studies";
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { DropDown } from './components/Menu/DropDown';
import { useMenuContext } from './context/MenuContext';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';

function App() {

  const { openMenu, setOpenMenu } = useMenuContext();

  return (
    <div className="App max-h-screen scroll-smooth overflow-y-scroll overflow-x-hidden snap-y snap-proximity">
      <NavMenu setOpenMenu={setOpenMenu} />
      {openMenu && (
        <Menu>
          <DropDown setOpenMenu={setOpenMenu} />
        </Menu>
      )}
      <FrontPage />
      <About />
      <Skills />
      <Studies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
