import React, { useState, useEffect } from 'react'
import AddReceipe from './AddReceipe'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import logo from '../img/logo.png'

const Header = ({SearchString}) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const onSearch = (e)=> {
    setSearchInput(e.target.value)
    console.log("set State",searchInput);
  }

  const[searchInput, setSearchInput] = useState();
  const handelSearch = (e) => {
    e.preventDefault();
    SearchString(searchInput);
  }


  return (
   <>
      <header className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <form className="search" onSubmit={handelSearch}>
        <input type="text" className="search__field" value={searchInput} placeholder="Search over 1,000,000 recipes..." onChange={onSearch} />
        <button className="btn search__btn">
          <svg className="search__icon">
            <use href="src/img/icons.svg#icon-search" />
          </svg>
          <span onClick={handelSearch}>Search</span>
        </button>
      </form>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <button className="nav__btn nav__btn--add-recipe">
              <svg className="nav__icon">
                <use href="src/img/icons.svg#icon-edit" />
              </svg>
              <span onClick={openModal} >Add recipe</span>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
              <AddReceipe onRequestClose={closeModal}/>
              </Modal>
            </button>
          </li>
          <li className="nav__item">
            <button className="nav__btn nav__btn--bookmarks">
              <svg className="nav__icon">
                <use href="src/img/icons.svg#icon-bookmark" />
              </svg>
              <span>Bookmarks</span>
            </button>
            <div className="bookmarks">
              <ul className="bookmarks__list">
                <div className="message">
                  <div>
                    <svg>
                      <use href="src/img/icons.svg#icon-smile" />
                    </svg>
                  </div>
                  <p>
                    No bookmarks yet. Find a nice recipe and bookmark it :)
                  </p>
                </div>
                <li className="preview">
                  <a className="preview__link" href="#23456">
                    <figure className="preview__fig">
                      <img src="src/img/test-1.jpg" alt="Test" />
                    </figure>
                    <div className="preview__data">
                      <h4 className="preview__name">
                        Pasta with Tomato Cream ...
                      </h4>
                      <p className="preview__publisher">The Pioneer Woman</p>
                    </div>
                  </a>
                </li> 
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>

   </>
  )
}

export default Header