import React from 'react'
import OtherCompsSearch from './OtherCompsSearch'
import SerachResult from './SerachResult'

const ResultSide = ({searchInput, dtLen, setReceipe, RecPerPage}) => {
  return (
    <>
    <div className="search-results">  
      <SerachResult searchInput={searchInput} dtLen={dtLen} setReceipe={setReceipe} />  
      <OtherCompsSearch dtLen={dtLen} RecPerPage={RecPerPage} />
    </div>
    </>
  );
}

export default ResultSide