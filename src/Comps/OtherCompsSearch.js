import React from 'react'

const OtherCompsSearch = ({dtLen}) => {
  return (
    <>
        <div className="pagination">
            {dtLen > 10 ? <button className="btn--inline pagination__btn--prev">
            <svg className="search__icon">
                {/* <use href="src/img/icons.svg#icon-arrow-left" /> */}
            </svg>
            <span>Page 1</span>
            </button>
            : null }

            {dtLen > 0?       
            <button className="btn--inline pagination__btn--next">
            <span>Page 3</span>
            <svg className="search__icon">
                {/* <use href="src/img/icons.svg#icon-arrow-right" /> */}
            </svg>
            </button>
            : null }
        </div>
        <p className="copyright">
            © Copyright by
            <a className="twitter-link" href="https://twitter.com/jonasschmedtman">Jonas Schmedtmann</a>. Use for learning or your portfolio. Don't use to teach. Don't claim
            as your own.
        </p>
    </>
  )
}

export default OtherCompsSearch