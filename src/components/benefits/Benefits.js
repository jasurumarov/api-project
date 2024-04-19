import React from 'react'

const Benefits = () => {
    const data = [
        {
            id: 1,
            title: "Everyday Fresh & Clean with Our Products",
        },
        {
            id: 2,
            title: "Make your strong Chargery and Easy",
        },
        {
            id: 3,
            title: "The best Phone Products Online",
        }
    ]

    let cards = data?.map(el => (
        <div key={el.id}>
            <p>{el.title}</p>
            <button>Shop Now</button>
        </div>
    ))
  return (
    <div className='benefits-section'>
        <div className="container">
            <div className="benefits-section__content">
                {cards}
            </div>
        </div>
    </div>
  )
}

export default Benefits