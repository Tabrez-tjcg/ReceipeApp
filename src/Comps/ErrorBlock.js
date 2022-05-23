import React from 'react'

const ErrorBlock = () => {
  return (
    <>
        <div className="error">
            <div>
            <svg>
                <use href="src/img/icons.svg#icon-alert-triangle" />
            </svg>
            </div>
            <p>No recipes found for your query. Please try again!</p>
        </div> 
    </>
  )
}

export default ErrorBlock