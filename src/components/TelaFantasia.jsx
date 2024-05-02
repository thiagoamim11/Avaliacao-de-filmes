import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import styles from "./TelaFilmes.module.css";

function Star({ filled, onClick }) {
  return (
    <span 
      style={{ color: filled ? 'gold' : 'gray', cursor: 'pointer' }}
      onClick={onClick}
    >
      &#9733;
    </span>
  );
}

// Componente para exibir o sistema de avaliação de estrelas
function RatingStars({ rating, onRate, onHover, hoverRating }) {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {[1, 2, 3, 4, 5].map((index) => (
          <Star 
            key={index} 
            filled={index <= (hoverRating || rating)} 
            onClick={() => onRate(index)} 
            onMouseEnter={() => onHover(index)} 
            onMouseLeave={() => onHover(0)} 
          />
        ))}
      </div>
    );
  }
  

export function TelaFantasia() {

  const [ratings, setRatings] = useState([0, 0]); // Inicialmente, todas as avaliações são 0
  const [hoverRatings, setHoverRatings] = useState([0, 0]); // Inicialmente, todas as avaliações de hover são 0

  const handleRate = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };

  const handleHover = (index, hoverRating) => {
    const newHoverRatings = [...hoverRatings];
    newHoverRatings[index] = hoverRating;
    setHoverRatings(newHoverRatings);
  };

  return (
    <div>
      <Sidebar />
      <div className={styles.container}>
        
        <h1 className={styles.titulo}>Fantasia</h1>

        <div className={styles.fila1}> 

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="https://image.tmdb.org/t/p/w342/uaYlFpBYbzi3trD32w2LHimiMzJ.jpg" 
              alt="Capa do filme" 
              style={{ width: '25vh', height: 'auto', margin: '10px' }} // Definindo largura de 100% e altura automática
            />
            <RatingStars 
              rating={ratings[0]}
              onRate={(rating) => handleRate(0, rating)}
              onHover={(hoverRating) => handleHover(0, hoverRating)}
              hoverRating={hoverRatings[0]}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="https://image.tmdb.org/t/p/w342/3JkL7dMFw3gXtPRrmMOKXJD1Ude.jpg" 
              alt="Capa do filme" 
              style={{ width: '25vh', height: 'auto', margin: '10px' }} // Definindo largura de 100% e altura automática
            />
            <RatingStars 
              rating={ratings[1]}
              onRate={(rating) => handleRate(1, rating)}
              onHover={(hoverRating) => handleHover(1, hoverRating)}
              hoverRating={hoverRatings[1]}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="https://image.tmdb.org/t/p/w342/g4hSAfG5HQgt65Tvwz1N5Ml6W0d.jpg" 
              alt="Capa do filme" 
              style={{ width: '25vh', height: 'auto', margin: '10px' }} // Definindo largura de 100% e altura automática
            />
            <RatingStars 
              rating={ratings[2]}
              onRate={(rating) => handleRate(2, rating)}
              onHover={(hoverRating) => handleHover(2, hoverRating)}
              hoverRating={hoverRatings[2]}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="https://image.tmdb.org/t/p/w342/5DBQgY7nqJeTudCeRH2oEZk6Av1.jpg" 
              alt="Capa do filme" 
              style={{ width: '25vh', height: 'auto', margin: '10px' }} // Definindo largura de 100% e altura automática
            />
            <RatingStars 
              rating={ratings[3]}
              onRate={(rating) => handleRate(3, rating)}
              onHover={(hoverRating) => handleHover(3, hoverRating)}
              hoverRating={hoverRatings[3]}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="https://image.tmdb.org/t/p/w342/63zVMAA4oxz9N8EnkNdR8gpyjKf.jpg" 
              alt="Capa do filme" 
              style={{ width: '25vh', height: 'auto', margin: '10px' }} // Definindo largura de 100% e altura automática
            />
            <RatingStars 
              rating={ratings[4]}
              onRate={(rating) => handleRate(4, rating)}
              onHover={(hoverRating) => handleHover(4, hoverRating)}
              hoverRating={hoverRatings[4]}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="https://image.tmdb.org/t/p/w342/3IYqVM2jEHn8j9ZVETE0VcNvGoz.jpg" 
              alt="Capa do filme" 
              style={{ width: '25vh', height: 'auto', margin: '10px' }} // Definindo largura de 100% e altura automática
            />
            <RatingStars 
              rating={ratings[5]}
              onRate={(rating) => handleRate(5, rating)}
              onHover={(hoverRating) => handleHover(5, hoverRating)}
              hoverRating={hoverRatings[5]}
            />
          </div>
        </div>



        <div className={styles.fila2}>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="https://image.tmdb.org/t/p/w342/s6yJjbyZu5zaiDF1jlfOuzcnxwA.jpg" 
              alt="Capa do filme" 
              style={{ width: '25vh', height: 'auto', margin: '10px' }} // Definindo largura de 100% e altura automática
            />
            <RatingStars 
              rating={ratings[6]}
              onRate={(rating) => handleRate(6, rating)}
              onHover={(hoverRating) => handleHover(6, hoverRating)}
              hoverRating={hoverRatings[6]}
            />
          </div>

         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="https://image.tmdb.org/t/p/w342/kyCkaG3d37igICfgqNn0LZaHW9y.jpg" 
              alt="Capa do filme" 
              style={{ width: '25vh', height: 'auto', margin: '10px' }} // Definindo largura de 100% e altura automática
            />
            <RatingStars 
              rating={ratings[7]}
              onRate={(rating) => handleRate(7, rating)}
              onHover={(hoverRating) => handleHover(7, hoverRating)}
              hoverRating={hoverRatings[7]}
            />
          </div>
  
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="https://image.tmdb.org/t/p/w342/zCz483fU94RxRt1gdGW1rxQkcID.jpg" 
              alt="Capa do filme" 
              style={{ width: '25vh', height: 'auto', margin: '10px' }} // Definindo largura de 100% e altura automática
            />
            <RatingStars 
              rating={ratings[8]}
              onRate={(rating) => handleRate(8, rating)}
              onHover={(hoverRating) => handleHover(8, hoverRating)}
              hoverRating={hoverRatings[8]}
            />
          </div>


         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="https://image.tmdb.org/t/p/w342/6WYAYdPYwzQjAOnD6AD4E4OZfI3.jpg" 
              alt="Capa do filme" 
              style={{ width: '25vh', height: 'auto', margin: '10px' }} // Definindo largura de 100% e altura automática
            />
            <RatingStars 
              rating={ratings[9]}
              onRate={(rating) => handleRate(9, rating)}
              onHover={(hoverRating) => handleHover(9, hoverRating)}
              hoverRating={hoverRatings[9]}
            />
          </div>
  
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="https://image.tmdb.org/t/p/w342/xVHQs2SjbcMy3kLabuWHbfWr5n6.jpg" 
              alt="Capa do filme" 
              style={{ width: '25vh', height: 'auto', margin: '10px' }} // Definindo largura de 100% e altura automática
            />
            <RatingStars 
              rating={ratings[10]}
              onRate={(rating) => handleRate(10, rating)}
              onHover={(hoverRating) => handleHover(10, hoverRating)}
              hoverRating={hoverRatings[10]}
            />
          </div>


          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="https://image.tmdb.org/t/p/w342/nfEeRzbjl5OC6loVnaQir4GX7ju.jpg" 
              alt="Capa do filme" 
              style={{ width: '25vh', height: 'auto', margin: '10px' }} // Definindo largura de 100% e altura automática
            />
            <RatingStars 
              rating={ratings[11]}
              onRate={(rating) => handleRate(11, rating)}
              onHover={(hoverRating) => handleHover(11, hoverRating)}
              hoverRating={hoverRatings[11]}
            />
          </div>

        </div>

      </div>    
    </div>
  );
}
