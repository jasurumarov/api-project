import React from 'react'

const Benefits = () => {
    const data = [
        {
            id: 1,
            img: "./images/benefitsicon1.svg",
            title: "Best prices & offers",
            desc: "Orders $50 or more"
        },
        {
            id: 2,
            img: "./images/benefitsicon2.svg",
            title: "Free delivery",
            desc: "24/7 amazing services"
        },
        {
            id: 3,
            img: "./images/benefitsicon3.svg",
            title: "Great daily deal",
            desc: "When you sign up"
        },
        {
            id: 4,
            img: "./images/benefitsicon4.svg",
            title: "Wide assortment",
            desc: "Mega Discounts"
        },
        {
            id: 5,
            img: "./images/benefitsicon5.svg",
            title: "Easy returns",
            desc: "Within 30 days"
        }
    ]

    let cards = data?.map(el => (
        <div key={el.id} className="benefitsBottom-section__card">
            <img src={el.img} alt="" />
            <div>
                <p>{el.title}</p>
                <h5>{el.desc}</h5>
            </div>
        </div>
    ))
  return (
    <div className='benefitsBottom-section'>
        <div className="container">
            <div className="benefitsBottom-section__content">
                {cards}
            </div>
        </div>
    </div>
  )
}

export default Benefits