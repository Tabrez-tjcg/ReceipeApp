import React from 'react'
import OtherCompsSearch from './OtherCompsSearch'
import SerachResult from './SerachResult'

const ResultSide = ({searchInput}) => {
  return (
    <>
    <SerachResult searchInput={searchInput}  />  
    <OtherCompsSearch />
    </>
  );
}

export default ResultSide