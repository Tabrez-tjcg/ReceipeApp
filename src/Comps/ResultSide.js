import React from 'react'
import OtherCompsSearch from './OtherCompsSearch'
import SerachResult from './SerachResult'

const ResultSide = ({searchInput, setFlag}) => {
  return (
    <>
    <SerachResult searchInput={searchInput} setFlag={setFlag}  />  
    <OtherCompsSearch />
    </>
  );
}

export default ResultSide