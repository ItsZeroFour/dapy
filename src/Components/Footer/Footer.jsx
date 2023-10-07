import React from "react";
import style from "./Footer.module.scss";
import logo from "../../images/Home/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__content}>
          <div className={style.footer__left}>
            <h4>Навигация</h4>

            <div className={style.footer__left__content}>
              {[
                {
                  items: [
                    { content: "Материалы", link: "/materials" },
                    { content: "Монтаж изделий", link: "/installation" },
                    { content: "Качество", link: "/quality" },
                    { content: "Радиаторы", link: "/radiators" },
                    { content: "Полотенцесушители", link: "/towel" },
                    { content: "Эксклюзив", link: "/exclusive" },
                  ],
                },
                {
                  items: [
                    { content: "Главная", link: "/" },
                    { content: "О бренде", link: "/about" },
                    { content: "Эстетика", link: "/estetic" },
                    { content: "Почему мы?", link: "/why-us" },
                    { content: "Атмосфера в доме", link: "/atmosphere" },
                  ],
                },
                {
                  items: [
                    { content: "Документы", link: "/documents" },
                    { content: "Гарантия", link: "/guarantee" },
                    { content: "Контакты", link: "/contacts" },
                    { content: "Партнерство", link: "/partnership" },
                  ],
                },
              ].map(({ items }, index) => (
                <ul key={index}>
                  {items.map(({ content, link}, index) => (
                    <li key={index}>
                      <Link to={link}>{content}</Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className={style.footer__right}>
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
