import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import styles from './TelaPrincipal.module.css';
import { Sidebar } from './Sidebar';

export function TelaPrincipal({ draggable }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 200,
        arrows: false,
        draggable: draggable,  
              
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <Sidebar />
            <main>
                <div className={styles.carousel}>
                <div className={styles.sliderWrapper}>
                    <div className={styles.titulo}>
                        <img src='filme1.png'/>
                    <h1>Filmes em Destaque</h1>
                    </div>

                    <Slider {...settings} className={styles.destaque}>
                        <div className={styles.imageWrapper}>
                            <img src='https://capas-p.imagemfilmes.com.br/164747_000_p.jpg' className={styles.carouselImage} draggable={draggable} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src='https://capas-p.imagemfilmes.com.br/164856_000_p.jpg' className={styles.carouselImage} draggable={draggable} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src='https://capas-p.imagemfilmes.com.br/164869_000_p.jpg' className={styles.carouselImage} draggable={draggable} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src='https://capas-p.imagemfilmes.com.br/164859_000_p.jpg' className={styles.carouselImage} draggable={draggable} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src='https://capas-p.imagemfilmes.com.br/164815_000_p.jpg' className={styles.carouselImage} draggable={draggable} />
                        </div>


                        {/* Adicione mais imagens conforme necessário */}
                    </Slider>
                    </div>
                </div>
    
                <section>
                    <div className={styles.loginArea}> {/* Login */}
                        <div>
                            <img src='filme1.png' alt="Filme 1" />
                            <h4>Avaliação de <strong>Filmes</strong> & <strong>Séries</strong></h4>
                        </div>
                        


                        <div>
                        <input type='text' placeholder='Login ou e-mail' />
                        <input type='text' placeholder='Senha' />
                        <button>CONFIRMAR</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
