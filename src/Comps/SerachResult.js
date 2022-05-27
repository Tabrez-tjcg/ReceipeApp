import React, { useEffect, useState } from 'react'

const SerachResult = ({searchInput, dtLen, setReceipe}) => {

    const [flag, setFlag] = useState(false);
    const [recData, setRecData] = useState([]);
    
    let RecData = [];

  
    
    useEffect(() => {
        getRecipe();
        // getFlag(flag);
    }, [searchInput])

    const getRecipe = () => {

        console.log("What is search :: ", searchInput);

        let data = [];
        // setRecData([{name: "abc"}, {"name": "xyz"}])

        let dataLen = 0;
    
        const API = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchInput}&key=179fc4d4-e42b-40fa-ac04-e9a35dbe6925`;
        
        async function GetData(e) {
            try{
            console.log("Getting Data")
            const res = await fetch(API);
            data = await res.json();
            RecData = await data.data.recipes;
            setRecData(RecData)
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


    // return ( 
    //     <>
            
    //     </>
    //     )
    
    }

    const setReceipeIndex = (id) => {
        console.log("It's Inside!!!",id)
        setReceipe(id);
    }

    return (
        <ul className="results">
            {console.log("RecData :: "+recData)}
            
                {recData.lenght != 0 && recData.map((recipeData, index) => (
                    <>
                    {/* {console.log("rcData :: "+recipeData)} */}
                    {/* {console.log("indVal :: "+recipeData.index)} */}

                    {index < 10 &&
                    <li className="preview" key={index}>
                    <a className="preview__link preview__link--active" onClick={() => setReceipeIndex(recipeData.id)} href="#23456" >
                        <figure className="preview__fig">
                        <img src={recipeData.image_url} alt="Test" />
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
                }
                </>)

                )}
        </ul>
    )

}

export default SerachResult