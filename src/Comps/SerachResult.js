import React, { useEffect, useState } from 'react'

const SerachResult = ({searchInput, dtLen}) => {

    const [flag, setFlag] = useState(false);
    
    let RecData = [];

  
    
    // useEffect(() => {
    //     getRecipe();
    //     // getFlag(flag);
    // }, [searchInput])

    const getRecipe = () => {

        console.log("What is search :: ", searchInput);

        let data = [];

        let dataLen = 0;
    
        const API = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchInput}&key=6f023f1f-818d-40d7-a0a0-f095148f22ae`;
        
        async function GetData(e) {
            try{
            console.log("Getting Data")
            const res = await fetch(API);
            data = await res.json();
            RecData = await data.data.recipes;
            console.log("The Data::",RecData[2]);
            dataLen = Object.keys(RecData).length;
            console.log("Data len:",dataLen);
            dtLen(dataLen);
            setFlag(true);
        }
        catch(e){
            console.log("Error Occured : ",e);
            console.log("Data len:",dataLen);
            setFlag(false);
            dtLen(dataLen);
        }
    }

    GetData();


    return ( 
        <>
            
                {RecData.map((recipeData, index) => (
                    <>
                    {/* {console.log("rcData :: "+recipeData)}
                    {console.log("indVal :: "+recipeData.index)} */}

                <ul className="results" key={index}>
                    <li className="preview">
                    <a className="preview__link preview__link--active" href="#23456">
                        <figure className="preview__fig">
                        {/* <img src={recipeData[index].img_url} alt="Test" /> */}
                        </figure>
                        <div className="preview__data">
                        <h4 className="preview__title">{recipeData.title}</h4>
                        <p className="preview__publisher">{recipeData.publisher}</p>
                        <div className="preview__user-generated">
                            <svg>
                            <use href="src/img/icons.svg#icon-user" />
                            </svg>
                        </div>
                        </div>
                    </a>
                    </li>
                </ul>
                </>)

                )}
        </>
        )

    
    }


    return (
        <>
            {getRecipe()}
        </>

    )

}

export default SerachResult