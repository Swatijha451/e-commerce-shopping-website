
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import FetchItems from '../components/FetchItems';
import LoadingSpinner from '../components/LoadingSpinner';
import { useSelector } from 'react-redux';
import HomeItem from '../components/HomeItem';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import HomeItem from '../components/HomeItem';
// import BagItem from"../components/BagItem";

// import HomeItem from '../components/HomeItem';

// const App=()=>{

//   const fetchStatus= useSelector(store=>store.fetchStatus);

//   return (
//     <>
//     <Header></Header>
//     <FetchItems/>
//      {/* <HomeItem/> 
//      <BagItem/>  */}
//      {fetchStatus.currentlyFetching ? <LoadingSpinner/>:<Outlet/>}
//     <Footer></Footer>
//     </>
//   );
// };

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;


