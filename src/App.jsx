// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
  <>
    <div id="site-body">
      <aside>
        <Header />
        <Footer />
      </aside>
      <main>
        <h1 id="eric-name">Eric Peterson</h1>
        <div id="outlet"><Outlet /></div>
      </main>
    </div>
  </>
  )
}

export default App;
