import React from 'react'

const HeaderTop = () => {
  return (
    <div className='header-top'>
        <div className="header-container">
            <div className="navbar">
                <button>
                    <img src="./images/menu-btn.svg" alt="menu btn" />
                </button>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <select name="" id="">
                            <option selected disabled value="Category">Category</option>
                            <option value="">
                                <a href="#">Z Fold</a>
                            </option>
                            <option value="">
                                <a href="#">A54</a>
                            </option>
                            <option value="">
                                <a href="#">Note 20s</a>
                            </option>
                            <option value="">
                                <a href="#">s240 Ultra</a>
                            </option>
                        </select>
                    </li>
                    <li>
                        <select name="" id="">
                            <option selected disabled value="Category">Products</option>
                            <option value="">
                                <a href="#">Z Fold</a>
                            </option>
                            <option value="">
                                <a href="#">A54</a>
                            </option>
                            <option value="">
                                <a href="#">Note 20s</a>
                            </option>
                            <option value="">
                                <a href="#">s240 Ultra</a>
                            </option>
                        </select>
                    </li>
                    <li>
                        <select name="" id="">
                            <option selected disabled value="Pages">Pages</option>
                            <option value="">
                                <a href="#">Home</a>
                            </option>
                            <option value="">
                                <a href="#">Bloges</a>
                            </option>
                        </select>
                    </li>
                    <li>
                        <select name="" id="">
                            <option selected disabled value="Blog">Blog</option>
                            <option value="">
                                <a href="#">Last</a>
                            </option>
                            <option value="">
                                <a href="#">News</a>
                            </option>
                        </select>
                    </li>
                    <li>
                        <select name="" id="">
                            <option selected disabled value="Elements">Elements</option>
                            <option value="">
                                <a href="#">ElementA</a>
                            </option>
                            <option value="">
                                <a href="#">ElementS</a>
                            </option>
                        </select>
                    </li>
                </ul>
                <p>
                    <img src="./images/call-icon.svg" alt="call icon" />
                    +123 ( 456 ) ( 7890 )
                </p>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop