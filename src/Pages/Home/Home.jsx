import React from "react";
import style from "./Home.module.scss";
import homeImg from "../../images/Home/home.svg";
import warmImg from "../../images/Home/warmIcon.svg";
import goodImg from "../../images/Home/good.svg";
import logo from "../../images/Home/logo.png";
import hotImg from "../../images/Home/hotIcon.svg";
import protectImg from "../../images/Home/protectIcon.svg";
import ecoImg from "../../images/Home/ecoIcon.svg";
import homeAboutImg from "../../images/Home/homeAbout.jpg";
import radiators from "../../images/Home/radiators.jpg";
import towel from "../../images/Home/towel.jpg";
import HomeImgList01 from "../../images/Home/HomeImgList01.png";
import HomeImgList02 from "../../images/Home/HomeImgList02.png";
import HomeImgList03 from "../../images/Home/HomeImgList03.png";
import HomeImgList04 from "../../images/Home/HomeImgList04.png";
import HomeImgList05 from "../../images/Home/HomeImgList05.png";
import HomeImgList06 from "../../images/Home/HomeImgList06.png";
import HomeImgList07 from "../../images/Home/HomeImgList07.png";
import HomeImgList08 from "../../images/Home/HomeImgList08.png";
import slideImg01 from "../../images/Home/sliderImage01.jpg";
import slideImg02 from "../../images/Home/sliderImage02.jpg";
import slideImg03 from "../../images/Home/sliderImage03.jpg";
import slideImg04 from "../../images/Home/sliderImage04.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  return (
    <main className={style.home}>
      <section className={style.home__banner}>
        <div className={style.home__banner__text}>
          <h1>Закажите радиатор DAPY,</h1>
          <h1>чтобы в доме было:</h1>
        </div>

        <ul>
          {[
            {
              title: "Эстетично",
              text: "Украшают интерьер",
              img: homeImg,
            },

            {
              title: "Тепло",
              text: "Согревают в холода",
              img: warmImg,
            },

            {
              title: "Здорово",
              text: "Дезинфицируют воздух",
              img: goodImg,
            },
          ].map(({ title, text, img }) => (
            <li key={title}>
              <img src={img} alt={title} />
              <h4>{title}</h4>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="container">
        <section className={style.home__about}>
          <div className={style.home__about__left}>
            <img className={style.home__about__logo} src={logo} alt="logo" />
            <h4>
              <span>DAPY</span> – это инновационные радиаторы отопления и
              полотенцесушители.
            </h4>

            <ul>
              {[
                {
                  img: hotImg,
                  text: "Выглядят оригинально",
                },

                {
                  img: protectImg,
                  text: "Дополняют и создают дизайн интерьера",
                },

                {
                  img: ecoImg,
                  text: "Cоздают благоприятный микроклимат",
                },
              ].map(({ img, text }) => (
                <li key={text}>
                  <img src={img} alt={text} />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={style.home__about__right}>
            <img src={homeAboutImg} alt="cat" />
          </div>
        </section>

        <section className={style.home__catalog}>
          <div className={style.home__catalog__text}>
            <h3>Отопительные приборы DAPY</h3>
            <p>Перейдите в каталог и выберите свой источник тепла</p>
          </div>

          <ul className={style.home__catalog__items}>
            {[
              {
                img: radiators,
                title: "Радиаторы",
                text: "Радиатор - это устройство для рассеивания тепла в воздухе (излучением и конвекцией), воздушный теплообменник.",
              },

              {
                img: towel,
                title: "Полотенцесушители",
                text: "Полотенцесушители являются разновидностью отопительных приборов, устанавливающихся в ванных комнатах.",
              },
            ].map(({ img, title, text }) => (
              <li
                key={title}
                style={{
                  backgroundImage: `url(${img})`,
                }}
                data-text={text}
              >
                <h4>{title}</h4>
              </li>
            ))}
          </ul>

          <ul className={style.home__advantages}>
            {[
              {
                title: "1 год",
                subtitle: "На рынке",
              },

              {
                title: "1000+",
                subtitle: "Заказов",
              },

              {
                title: "9",
                subtitle: "Моделей",
              },
            ].map(({ title, subtitle }) => (
              <li key={title}>
                <h1>{title}</h1>
                <h4>{subtitle}</h4>
              </li>
            ))}
          </ul>
        </section>

        <section className={style.home__img__list}>
          <ul>
            {[
              {
                img: HomeImgList01,
              },

              {
                img: HomeImgList02,
              },
              {
                img: HomeImgList03,
              },
              {
                img: HomeImgList04,
              },
              {
                img: HomeImgList05,
              },
              {
                img: HomeImgList06,
              },
              {
                img: HomeImgList07,
              },
              {
                img: HomeImgList08,
              },
            ].map(({ img }, index) => (
              <li key={index}>
                <img src={img} alt="home list" />
              </li>
            ))}
          </ul>
        </section>
      </div>

      <Swiper
        slidesPerView={1}
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "9px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        slide
        pagination={{ clickable: true }}
        className={style.home__slider}
      >
        {[
          {
            img: slideImg01,
            title: "Немного о DAPY",
            text: "Внутри у DAPY может быть коллектор из нержавеющих труб, по которому циркулирует горячая вода, либо – уложен углеродистый электрический греющий кабель.",
          },
          {
            img: slideImg02,
            title: "Немного о DAPY",
            text: "Сталь или греющий кабель – окружает массивный слой композитного материала, который состоит из сплава алюминия и камня.",
          },
          {
            img: slideImg03,
            title: "Немного о DAPY",
            text: "Фасады радиаторов DAPY имеют рисунки, эстетически привлекательных форм.",
          },
          {
            img: slideImg04,
            title: "Немного о DAPY",
            text: "Также радиаторы отопления DAPY – способствуют созданию и поддержанию здоровой атмосферы и микроклимата в помещениях, которые они обогревают",
          },
        ].map(({ img, title, text }) => (
          <SwiperSlide key={img}>
            <div
              className={style.home__slider__item}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className={style.home__slider__item__text}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Home;
