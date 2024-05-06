import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
// import HomeItem from '../components/HomeItem';

const App=()=>{
  return (
    <>
    <Header></Header>
    <Outlet/>  
    <Footer></Footer>
    </>
  )
};


export default App
