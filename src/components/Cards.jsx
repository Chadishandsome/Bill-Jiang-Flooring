import React from 'react'
import './Cards.css'
import { Link, useNavigate } from 'react-router-dom'
import cardsInfo from '../data/CardsInfo.jsx'
import { getImageURL } from '../functions/images.jsx'


function Cards() {
  return (
    <div className='cards'>
      {cardsInfo.map((card, index) => (
        <Card key={index} index={index} path={card.path} title={card.title} text={card.text}/>
      ))}
    </div>

  )
}

export default Cards

function Card({ index, path, title, text}) {

  const navigate = useNavigate();

  const handleParamClick = (event, param) => {
    event.preventDefault();
    navigate(`/services/#${param}`);
  };


  const backgroundStyle = {
    backgroundImage: `url(${getImageURL(cardsInfo[index].bgimg, 'CardImages')})`,
  };

  return (
    <Link  to={path} onClick={(event) => handleParamClick(event, cardsInfo[index].param)} style={{ textDecoration: 'none' }}>
      <div className='card' style={backgroundStyle}>
        <div className='card-container'>
          <div className='card-text-container'>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}