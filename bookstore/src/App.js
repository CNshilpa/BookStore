import logo from './logo.svg';
import './App.css';
import SignIn from './components/signin/signin';
import Lander from './pages/lander/Lander';
import SignUp from './components/signup/SignUp';
import PrimarySearchAppBar from './components/header/Header';
import Book from './pages/books/Book';
import HomePage from './pages/home/HomePage';
import BookDetails from './pages/bookdetails/BookDetails';
import Counter from './components/counter/Counter';
import { Router } from 'react-router-dom';
import MyCart from './components/mycart/MyCart';
import Address from './components/mycart/Address';
import Order from './components/mycart/Order';
import OrderPlaced from './components/orderplaced/OrderPlaced';
import Routers from './pages/router/Router';




function App() {
  return (
    <div className="App">
 {/* <SignIn/>   */}
{/* <Lander/>      */}
{/* <SignUp/> */}
{/* <PrimarySearchAppBar/>   */}
  {/* <Book/>   */}
 {/* <HomePage/>     */}
  {/* <BookDetails/> */}
  {/* <Counter/> */}
  {/* <Router/> */}
  {/* <MyCart/> */}
  {/* <Address/> */}
  {/* <Order/> */}
  {/* <OrderPlaced/> */}
  <Routers/>
    </div>
  );
}

export default App;
