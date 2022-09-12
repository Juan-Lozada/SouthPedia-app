import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyApi from './components/MyApi';
import FooterComponent from './components/FooterComponent'
import {useState} from 'react'

function App() {

  const [seasonData, setSeasonData] = useState([]);
  const[seasonFinder, setSeasonFinder] = useState('')

  return (
    <>
       <MyApi 
       seasonData={seasonData} setSeasonData={setSeasonData} 
       seasonFinder={seasonFinder} setSeasonFinder={setSeasonFinder}/>
      <FooterComponent/>
    </>
  );
}

export default App;
