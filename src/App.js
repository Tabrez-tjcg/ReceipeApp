import './App.css';
import React, { useState } from 'react';
import Header from './Comps/Header';
import Receipe from './Comps/Receipe';
import '../src/index.f7626f62.css'
import '../src/index.f7626f62.css'
import AddReceipe from './Comps/AddReceipe';
import Modal from 'react-modal/lib/components/Modal';
import ResultSide from './Comps/ResultSide';


function App(props) {
  const [searchInput, setSearchInput] = useState ('');
  const [flag, setFlag] = useState(false);
  const [dataLength, setDataLength] = useState(0);
  const SearchString = (searchInp) => {
    setSearchInput(searchInp);
    console.log("APP Data :: ",searchInput);
  }

  const dtLen = (l) => {
    setDataLength(l);
  }

  
  
  return (
    <div className="container">
    <Header SearchString={SearchString}/>

    <ResultSide 
      searchInput={searchInput}
      setFlag={setFlag}
      dtLen={dtLen} />

    <Receipe searchInput={searchInput} flag={flag} dataLength={dataLength} />
    
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
