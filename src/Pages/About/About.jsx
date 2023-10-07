import React from "react";
import style from "./About.module.scss";
import aboutTopImg from "../../images/About/aboutTop.jpg";
import { AiOutlineCheck } from "react-icons/ai";

const About = () => {
  return (
    <main className={style.about}>
      <div className={style.about__content}>
        <div className="container">
          <h3>О бренде</h3>
        </div>
        <ul className={style.about__road}>
          <li>2022</li>
          <li>2023</li>
          <li>2024</li>
        </ul>

        <div className="container">
          <section className={style.about__top}>
            <div className={style.about__top__left}>
              <p>
                Бренд создан в 2022 году предпринимателем-инноватором Денисом
                Румянцевым и его Партнерами.
              </p>

              <img src={aboutTopImg} alt="about" />
            </div>

            <div className={style.about__top__right}>
              <p>
                DAPY это передовой российский бренд, выпускающий уникальные
                радиаторы отопления и полотенцесушители.
              </p>
              <p>
                <span>Миссия бренда</span> Стремительно занять лидирующие
                позиции на рынке производителей отопительного оборудования и
                завоевать признание широкого спектра покупателей, которые хотят
                не только качественно обогревать свои дома и квартиры, но и
                украшать и дополнять свои продуманные, гармоничные интерьеры –
                эстетически привлекательными радиаторами отопления.
              </p>
            </div>
          </section>

          <section className={style.about__advantages}>
            <p className={style.about__advantages__title}>О бренде</p>

            <div className={style.about__advantages__content}>
              <div className={style.about__advantages__text}>
                <p>Производственный участок имеет ряд цехов</p>
                <p>
                  Завод способен быстро масштабироваться и расти, по мере роста
                  спроса на продукцию DAPY.
                </p>
              </div>

              <ul className={style.about__advantages__list}>
                {[
                  "Металлообработка",
                  "Постобработка",
                  "Литье",
                  "Сварка",
                  "Упаковка",
                ].map((item) => (
                  <li key={item}>
                    <AiOutlineCheck />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
