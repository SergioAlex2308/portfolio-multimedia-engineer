import './App.css';
import { Menu } from './components/Menu/Menu';
import { FrontPage } from './components/FrontPage/FrontPage';
import { Skills } from "./components/Skills/Skills";
import { Studies } from "./components/Studies/Studies";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Menu />
      <FrontPage />
      <Skills />
      <Studies />
    </div>
  );
}

export default App;
