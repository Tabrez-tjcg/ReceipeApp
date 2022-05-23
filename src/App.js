import './App.css';
import Header from './Comps/Header';
import Receipe from './Comps/Receipe';
import SerachResult from './Comps/SerachResult';
import '../src/index.f7626f62.css'
import AddReceipe from './Comps/AddReceipe';
import Modal from 'react-modal/lib/components/Modal';

const ReceipeListing = (recData) => {
  const RecList = recData;
}

function App() {
  return (
   <div className="container">
    <Header />
    <SerachResult />
    {/* <Receipe /> */}
    <Receipe ReceipeListing={ReceipeListing}/>
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
