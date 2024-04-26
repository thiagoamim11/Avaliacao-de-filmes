import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './TelaPrincipal.module.css';
import { Sidebar } from './Sidebar';
import { Link } from 'react-router-dom';


export function TelaPrincipal({ draggable }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 400,
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
                            <img src='filme1.png' />
                            <h1>Filmes em Destaque</h1>
                        </div>

                        <Slider {...settings} className={styles.destaque}>
                            <div className={styles.imageWrapper}>
                                <img src='https://image.tmdb.org/t/p/w500/oQJWjO5aw5N4uCoh6CYrxf1LePv.jpg' className={styles.carouselImage} draggable={draggable} />
                            </div>
                            <div className={styles.imageWrapper}>
                                <img src='https://image.tmdb.org/t/p/w500/qGz5rffXhegQH5PGUDiObqoOt06.jpg' className={styles.carouselImage} draggable={draggable} />
                            </div>
                            <div className={styles.imageWrapper}>
                                <img src='https://image.tmdb.org/t/p/w500/2MWZy92O30GX0HwKyVvQ8rddqGU.jpg' className={styles.carouselImage} draggable={draggable} />
                            </div>
                            <div className={styles.imageWrapper}>
                                <img src='https://image.tmdb.org/t/p/w500/pMyNl3NlZx1CXgbrCuSiWkWdp9D.jpg' className={styles.carouselImage} draggable={draggable} />
                            </div>
                            <div className={styles.imageWrapper}>
                                <img src='https://image.tmdb.org/t/p/w500/qE4FZQiaQcKo9mYuqu2SwLIgbwG.jpg' className={styles.carouselImage} draggable={draggable} />
                            </div>


                            
                        </Slider>
                    </div>
                </div>

                
                <section>

                    <div className={styles.loginArea}> 

                        <img src='filme1.png' alt="Filme 1" />
                        <h4>Avaliação de <strong>Filmes</strong> & <strong>Séries</strong></h4>





                        <input type='text' placeholder='Login ou e-mail' />
                        <input type='text' placeholder='Senha' />
                        <button>CONFIRMAR</button>
                        <div><p><a> <Link to="/cadastro" className={styles.botaoRegistrar}>Registre-se </Link> </a></p></div>                      
                    </div>
                </section>
            </main>

            <footer className={styles.TelaPrincipalRodaPe}>
                <div><h2>Autores: <strong className={styles.strong1}>Thiago Amim Elias</strong> & <strong className={styles.strong1}>Thiago Otero Lima</strong></h2></div>
            </footer>
        </div>
    )
}
