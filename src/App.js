import logo from './logo.svg';
// import './App.css';
import NavBar from './components/NavBar/NavBar';
import PrimarySearchAppBar from './components/test';
import NavBar1 from './components/NavBar/NavBar1';
import SubNavBar from './components/SubNavBar/SubNavBar';
import Banner from './components/Banner/banner';
import { MyBox } from './components/NavBar/NavBar.style';
import { ItemBox } from './object/ItemBox.styles';
import Dropdown from './components/SubNavBar/dropdown';
import Categories from './components/SubNavBar/Categories';
import MegaMenu from './components/MegaMenu/MegaMenu';




function App() {
  return (
    <div className="App">
     <NavBar1/>
     <SubNavBar/>
      <Banner/>
    {/* <Categories></Categories> */}
    {/* <Dropdown></Dropdown>

<MegaMenu/>
     */}

    </div>
  );
}

export default App;
