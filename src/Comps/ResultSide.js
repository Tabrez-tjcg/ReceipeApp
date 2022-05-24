import React from 'react'
import OtherCompsSearch from './OtherCompsSearch'
import SerachResult from './SerachResult'

const ResultSide = ({searchInput, dtLen}) => {
  return (
    <>
    <SerachResult searchInput={searchInput} dtLen={dtLen} />  
    <OtherCompsSearch dtLen={dtLen} />
    </>
  );
}

export default ResultSide