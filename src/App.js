import './App.css';
import { Menu } from './components/Menu/Menu';
import { FrontPage } from './components/FrontPage/FrontPage';
import { Skills } from "./components/Skills/Skills";
import { Studies } from "./components/Studies/Studies";
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Menu />
      <FrontPage />
      <Skills />
      <Studies />
      <Projects />
    </div>
  );
}

export default App;
