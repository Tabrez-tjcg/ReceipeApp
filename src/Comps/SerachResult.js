import React from 'react'

const SerachResult = (props) => {
  return (
    <>
        <div className="search-results">
        <ul className="results">
            <li className="preview">
            <a className="preview__link preview__link--active" href="#23456">
                <figure className="preview__fig">
                <img src={props.recipes.image_url[1]} alt="Test" />
                </figure>
                <div className="preview__data">
                <h4 className="preview__title">{props.recipes.title[1]}</h4>
                <p className="preview__publisher">{props.recipes.publisher[1]}</p>
                <div className="preview__user-generated">
                    <svg>
                    <use href="src/img/icons.svg#icon-user" />
                    </svg>
                </div>
                </div>
            </a>
            </li>
        </ul>
        <div className="pagination">
            <button className="btn--inline pagination__btn--prev">
            <svg className="search__icon">
                <use href="src/img/icons.svg#icon-arrow-left" />
            </svg>
            <span>Page 1</span>
            </button>
            <button className="btn--inline pagination__btn--next">
            <span>Page 3</span>
            <svg className="search__icon">
                <use href="src/img/icons.svg#icon-arrow-right" />
            </svg>
            </button> 
        </div>
        <p className="copyright">
            © Copyright by
            <a className="twitter-link" href="https://twitter.com/jonasschmedtman">Jonas Schmedtmann</a>. Use for learning or your portfolio. Don't use to teach. Don't claim
            as your own.
        </p>
        </div>
    </>
  )
}

export default SerachResult