import React from 'react'

const Receipe = () => {
  return (
    <>
    <div className="recipe">
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
        <div className="error">
            <div>
            <svg>
                <use href="src/img/icons.svg#icon-alert-triangle" />
            </svg>
            </div>
            <p>No recipes found for your query. Please try again!</p>
        </div> 
        <figure className="recipe__fig">
            <img src="src/img/test-1.jpg" alt="Tomato" className="recipe__img" />
            <h1 className="recipe__title">
            <span>Pasta with tomato cream sauce</span>
            </h1>
        </figure>
        <div className="recipe__details">
            <div className="recipe__info">
            <svg className="recipe__info-icon">
                <use href="src/img/icons.svg#icon-clock" />
            </svg>
            <span className="recipe__info-data recipe__info-data--minutes">45</span>
            <span className="recipe__info-text">minutes</span>
            </div>
            <div className="recipe__info">
            <svg className="recipe__info-icon">
                <use href="src/img/icons.svg#icon-users" />
            </svg>
            <span className="recipe__info-data recipe__info-data--people">4</span>
            <span className="recipe__info-text">servings</span>
            <div className="recipe__info-buttons">
                <button className="btn--tiny btn--increase-servings">
                <svg>
                    <use href="src/img/icons.svg#icon-minus-circle" />
                </svg>
                </button>
                <button className="btn--tiny btn--increase-servings">
                <svg>
                    <use href="src/img/icons.svg#icon-plus-circle" />
                </svg>
                </button>
            </div>
            </div>
            <div className="recipe__user-generated">
            <svg>
                <use href="src/img/icons.svg#icon-user" />
            </svg>
            </div>
            <button className="btn--round">
            <svg className>
                <use href="src/img/icons.svg#icon-bookmark-fill" />
            </svg>
            </button>
        </div>
        <div className="recipe__ingredients">
            <h2 className="heading--2">Recipe ingredients</h2>
            <ul className="recipe__ingredient-list">
            <li className="recipe__ingredient">
                <svg className="recipe__icon">
                <use href="src/img/icons.svg#icon-check" />
                </svg>
                <div className="recipe__quantity">1000</div>
                <div className="recipe__description">
                <span className="recipe__unit">g</span>
                pasta
                </div>
            </li>
            <li className="recipe__ingredient">
                <svg className="recipe__icon">
                <use href="src/img/icons.svg#icon-check" />
                </svg>
                <div className="recipe__quantity">0.5</div>
                <div className="recipe__description">
                <span className="recipe__unit">cup</span>
                ricotta cheese
                </div>
            </li>
            </ul>
        </div>
        <div className="recipe__directions">
            <h2 className="heading--2">How to cook it</h2>
            <p className="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span className="recipe__publisher">The Pioneer Woman</span>. Please check out
            directions at their website.
            </p>
            <a className="btn--small recipe__btn" href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/" >
            <span>Directions</span>
            <svg className="search__icon">
                <use href="src/img/icons.svg#icon-arrow-right" />
            </svg>
            </a>
        </div>
    </div>

    </>
  )
}

export default Receipe