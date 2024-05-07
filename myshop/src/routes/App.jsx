
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import FetchItems from '../components/FetchItems';
import LoadingSpinner from '../components/LoadingSpinner';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeItem from '../components/HomeItem';

// import HomeItem from '../components/HomeItem';

const App=()=>{

  const fetchStatus= useSelector(store=>store.fetchStatus);

  return (
    <>
    <Header></Header>
    <FetchItems/>
    {fetchStatus.currentlyFetching ? <LoadingSpinner></LoadingSpinner>:<Outlet></Outlet>} 
    <Footer></Footer>
    </>
  )
};


export default App
