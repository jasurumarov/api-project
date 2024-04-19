import React from 'react'

const HeaderBottom = () => {
  return (
    <div className='header-bottom'>
        <div className="header-container">
            <nav className="navbar">
                <a className='navbar__logo' href="./index.html">
                    <img src="./images/site-logo.png" alt="site logo" />
                </a>
                <form>
                    <div className='form'>
                        <input name='search' id='search' type="search" placeholder='Search For items...' />
                        <div>
                            <select name="" id="">
                                <option selected disabled value="">All Categories</option>
                                <option value="">S24 5G</option>
                                <option value="">S24 Ultra</option>
                                <option value="">S23FE</option>
                                <option value="">S23 Ultra</option>
                                <option value="">S22 Lite</option>
                                <option value="">S22 Ultra</option>
                                <option value="">S22+</option>
                                <option value="">S22 5G</option>
                            </select>
                        </div>
                    </div>
                    <label for='search'>
                        <img src="./images/search.svg" alt="search icon" />
                    </label>
                </form>
                <ul>
                    <li>
                        <a href="#">
                            <img src="./images/user.svg" alt="user icon" />
                            Account
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./images/heart.svg" alt="user icon" />
                            Wishlist
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./images/cart.svg" alt="user icon" />
                            Cart
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default HeaderBottom