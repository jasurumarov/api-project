import React from 'react'
import { TbBrandTelegram } from "react-icons/tb";

const Hero = () => {
    const data = ["Shopping", "Seriyes", "Models", "News", "S24+"]
    let item = data?.map((el, i) => (
        <li key={i}>
            <img src="./images/x.svg" alt="x icon" />
            <p>{el}</p>
        </li>
    ))
  return (
    <div className='hero-section'>
        <div className="container">
            <div className="hero-section__content">
                <div className="hero-section__title">
                    <h4><span>100%</span>Guaranted Phones</h4>
                    <h1>The best way to stuff your wallet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur</p>
                    <form>
                        <TbBrandTelegram className='hero-section__title__form-icon' />
                        <input type="email" placeholder='Your emaill address' required/>
                        <button>Subscribe</button>
                    </form>
                </div>
                <ul className="hero-section__list">
                    {item}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Hero