import React, { useState } from 'react';
import Header from './Comps/Header';
import Receipe from './Comps/Receipe';
// import '../src/index.f7626f62.css'
import '../src/index.f7626f62.css'
import AddReceipe from './Comps/AddReceipe';
import Modal from 'react-modal/lib/components/Modal';
import ResultSide from './Comps/ResultSide';


function App(props) {
  const [searchInput, setSearchInput] = useState ('');
  const [flag, setFlag] = useState(false);
  const [dataLength, setDataLength] = useState(0);
  const [currentReceipe, setCurrentReceipe] = useState('');

  const [recordsPerPage, setRecordsPerPage] = useState();
  
  const SearchString = (searchInp) => {
    setSearchInput(searchInp);
    console.log("APP Data :: ",searchInput);
  }

  const dtLen = (l) => {
    setDataLength(l);
  }

  const setReceipe = (setReceipe) => {
    setCurrentReceipe(setReceipe);
    console.log("Current Rec. in App:",currentReceipe);
  }

  return (
    <div className="container">
    <Header SearchString={SearchString}/>

    <ResultSide 
      searchInput={searchInput}
      setFlag={setFlag}
      dtLen={dtLen}
      setReceipe={setReceipe} 
     />

    {console.log("Rec Per page",recordsPerPage)}

    <Receipe searchInput={searchInput} flag={flag} dataLength={dataLength} currentReceipe={currentReceipe} />
    
    <div className="overlay hidden" />

    <Modal
    className="modal"
    appElement={document.getElementById('app')}
    >
   </Modal>
   </div>
  );
}

export default App;
