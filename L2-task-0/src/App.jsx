import './App.css';
import Header from './Pages/Header/Header.jsx';
import Main from './Pages/Main/Main.jsx';
import Sidebar from './Pages/Sidebar/Sidebar.jsx';
import Footer from './Pages/Footer/Footer.jsx';

function App({data}) {

  return (
    <>
       <div className="container">
        <Header/>
        <Main data={data}/> 
        <Sidebar data={data}/> 
        <Footer/> 
       </div>
    </>
  )
}

export default App
