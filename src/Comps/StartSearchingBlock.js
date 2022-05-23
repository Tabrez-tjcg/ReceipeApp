import React from 'react'

const StartSearchingBlock = () => {
  return (
    <>
        <div className="message">
            <div>
            <svg>
                <use href="src/img/icons.svg#icon-smile" />
            </svg>
            </div>
            <p>Start by searching for a recipe or an ingredient. Have fun!</p>
        </div>
        <div className="spinner">
            <svg>
            <use href="src/img/icons.svg#icon-loader" />
            </svg>
        </div> 
    </>
  )
}

export default StartSearchingBlock