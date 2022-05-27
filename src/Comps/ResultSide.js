import React from 'react'
import OtherCompsSearch from './OtherCompsSearch'
import SerachResult from './SerachResult'

const ResultSide = ({searchInput, dtLen, setReceipe}) => {
  return (
    <>
    <div className="search-results">  
      <SerachResult searchInput={searchInput} dtLen={dtLen} setReceipe={setReceipe} />  
      <OtherCompsSearch dtLen={dtLen} />
    </div>
    </>
  );
}

export default ResultSide