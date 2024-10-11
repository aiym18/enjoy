import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './companents/Header';
import Home from './companents/Home';
import Productsr from './companents/Productst';
import HelpSenter from './companents/HelpSenter';
import Admin from './companents/Admin';
import Footer from './companents/Foorer';
import ProductDetalis from './companents/ProductDetalis';
import Search from './companents/Search';
import Basket from './companents/Basket';
import LogOut from './companents/LogOut';
import CategoryProduct from './companents/CategoryProduct';
import AddProduct from './companents/AddProduct';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productst' element={<Productsr/>}/>
        <Route path='/helpsenter' element={<HelpSenter/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/helpsenter' element={<HelpSenter/>}/>
        <Route path='/productDelalis' element={<ProductDetalis/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/logOut' element={<LogOut/>}/>
        <Route path='/categoryproduct' element={<CategoryProduct/>}/>
        <Route path='/addProduct' element={<AddProduct/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
