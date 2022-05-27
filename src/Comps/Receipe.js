import React, { useState, useEffect } from 'react'
import ErrorBlock from './ErrorBlock'
import StartSearchingBlock from './StartSearchingBlock'

const Receipe = ({searchInput, flag, dataLength, currentReceipe}) => {

    console.log("Props Data::",searchInput);
    console.log("Props Data::",flag);
    console.log("Props Data::",dataLength);
    console.log("Props Data::",currentReceipe);


    console.log("This is currrent Rec in Recipe::",currentReceipe)
    const [RecData, setRecData] = useState({});
    useEffect(() => {
        if(currentReceipe != "") {
            GetData();
        }
        
    }, [currentReceipe])



        let data = '';
        // let RecData = [];
        
        console.log("recTitle::", RecData.title)

        const API = `https://forkify-api.herokuapp.com/api/v2/recipes/${currentReceipe}`;
            
        async function GetData(e) {
            try{
            console.log("Getting Reciepe")
            const res = await fetch(API);
            data = await res.json();
            console.log("Single Reciepe : ", data);
            setRecData(await data.data.recipe);
            // console.log("recTitle::", RecData.title)
        }
        catch(e){
            console.log("Error Occured : ",e);
        }
    }

    // GetData();

    const onMinus = () => {
        console.log("Plus");
    }

    const onPlus = () => {
        console.log("Minus");

    }



  return (
    <>
    <div className="recipe">
    {searchInput == "" ? <StartSearchingBlock /> : 
        <div>
            {dataLength == 0 ? <ErrorBlock /> :
                <div>
                <figure className="recipe__fig">
                    <img src={RecData.image_url} alt="Tomato" className="recipe__img" />
                    <h1 className="recipe__title">
                    <span>{RecData.title}</span>
                    </h1>
                </figure>
                <div className="recipe__details">
                    <div className="recipe__info">
                    <svg className="recipe__info-icon">
                        <use href="src/img/icons.svg#icon-clock" />
                    </svg>
                    <span className="recipe__info-data recipe__info-data--minutes">{RecData.cooking_time}</span>
                    <span className="recipe__info-text">minutes</span>
                    </div>
                    <div className="recipe__info">
                    <svg className="recipe__info-icon">
                        <use href="src/img/icons.svg#icon-users" />
                    </svg>
                    <span className="recipe__info-data recipe__info-data--people">{RecData.servings}</span>
                    <span className="recipe__info-text">servings</span>
                    <div className="recipe__info-buttons">
                        <button className="btn--tiny btn--increase-servings" onClick={onMinus}>
                        {/* <svg>
                            <use href="src/img/icons.svg#icon-minus-circle" />
                        </svg> */}Add
                        </button>
                        <button className="btn--tiny btn--increase-servings" onClick={onPlus}>
                        {/* <svg>
                            <use href="src/img/icons.svg#icon-plus-circle" />
                        </svg> */}Minus
                        </button>
                    </div>
                    </div>
                    <div className="recipe__user-generated">
                    <svg>
                        <use href="src/img/icons.svg#icon-user" />
                    </svg>
                    </div>
                    <button className="btn--round">
                    <svg>
                        <use href="src/img/icons.svg#icon-user" />
                    </svg>
                    </button>
                </div>
                {/* {console.log("Ingredients", RecData.ingredients[0].description)} */}
                <div className="recipe__ingredients">
                    <h2 className="heading--2">Recipe ingredients</h2>
                    <ul className="recipe__ingredient-list">
                    {RecData.ingredients && RecData.ingredients.length  != 0 && RecData.ingredients.map((reci, index) => { 
                        return(
                        <>
                            <li className="recipe__ingredient"  key={index}>
                                <svg className="recipe__icon">
                                    <use href="src/img/icons.svg#icon-check" />
                                </svg>
                                <div className="recipe__quantity">{reci.quantity}</div>
                                <div className="recipe__description">
                                <span className="recipe__unit">{reci.unit}</span>
                                {reci.description}
                                </div>
                            </li>
                        </>
                    )})}
                    </ul>
                </div>
                <div className="recipe__directions">
                    <h2 className="heading--2">How to cook it</h2>
                    <p className="recipe__directions-text">
                    This recipe was carefully designed and tested by
                    <span className="recipe__publisher">The Pioneer Woman</span>. Please check out
                    directions at their website.
                    </p>
                    <a className="btn--small recipe__btn" href={RecData.source_url} >
                    <span>Directions</span>
                    <svg className="search__icon">
                        <use href="src/img/icons.svg#icon-arrow-right" />
                    </svg>
                    </a>
                </div>
                </div>
            }
        </div>}
    </div>

    </>
  )
}

export default Receipe