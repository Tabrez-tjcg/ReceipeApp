import React from 'react'

const AddReceipe = (props) => {
  return (
    <>
    <div classname="add-recipe-window hidden">
        <button classname="btn--close-modal" onClick={props.onRequestClose}>×</button>
        <form classname="upload">
            <div classname="upload__column">
            <h3 classname="upload__heading">Recipe data</h3>
            <label>Title</label>
            <input defaultvalue="TEST" required name="title" type="text" />
            <label>URL</label>
            <input defaultvalue="TEST" required name="sourceUrl" type="text" />
            <label>Image URL</label>
            <input defaultvalue="TEST" required name="image" type="text" />
            <label>Publisher</label>
            <input defaultvalue="TEST" required name="publisher" type="text" />
            <label>Prep time</label>
            <input defaultvalue="{23}" required name="cookingTime" type="number" />
            <label>Servings</label>
            <input defaultvalue="{23}" required name="servings" type="number" />
            </div>
            <div classname="upload__column">
            <h3 classname="upload__heading">Ingredients</h3>
            <label>Ingredient 1</label>
            <input defaultvalue="0.5,kg,Rice" type="text" required name="ingredient-1" placeholder="Format: 'Quantity,Unit,Description'" />
            <label>Ingredient 2</label>
            <input defaultvalue="1,,Avocado" type="text" name="ingredient-2" placeholder="Format: 'Quantity,Unit,Description'" />
            <label>Ingredient 3</label>
            <input defaultvalue=",,salt" type="text" name="ingredient-3" placeholder="Format: 'Quantity,Unit,Description'" />
            <label>Ingredient 4</label>
            <input type="text" name="ingredient-4" placeholder="Format: 'Quantity,Unit,Description'" />
            <label>Ingredient 5</label>
            <input type="text" name="ingredient-5" placeholder="Format: 'Quantity,Unit,Description'" />
            <label>Ingredient 6</label>
            <input type="text" name="ingredient-6" placeholder="Format: 'Quantity,Unit,Description'" />
            </div>
            <button classname="btn upload__btn">
            <svg>
                <use href="src/img/icons.svg#icon-upload-cloud" />
            </svg>
            <span>Upload</span>
            </button>
        </form>
    </div>
    </>
  )
}

export default AddReceipe