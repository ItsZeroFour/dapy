import React, { useState } from "react";
import style from "./Header.module.scss";
import { BsChevronDown } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5";
// Images
import phoneImg from "../../images/Home/phone.svg";
import clockImg from "../../images/Home/clock.svg";
import logo from "../../images/Home/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuNav, setOpenMenuNav] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  return (
    <header className={style.header}>
      <div className={style.header__top__right}>
        <div className={style.header__right__phone}>
          <img src={phoneImg} alt="phone" />
          <a href="tel:79200959099">+79200959099</a>
          <img src={clockImg} alt="clock" />
        </div>

        <button>Заказать</button>
      </div>

      <div className={style.header__bottom}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <nav>
          {[
            {
              title: "О DAPY",
              items: [
                { item: "О бренде", link: "/about" },
                { item: "Эстетика", link: "/estetic" },
                { item: "Против привычного", link: "/against-the-usual" },
                { item: "Атмосфера в доме", link: "/atmosphere" },
              ],
            },

            {
              title: "Материалы",
              items: [
                { item: "Качество", link: "/quality" },
                { item: "Монтаж изделий", link: "/installation" },
                { item: "Материалы", link: "/materials" },
              ],
            },

            {
              title: "Каталог",
              items: [
                { item: "Радиаторы", link: "/radiators" },
                { item: "Полотенцесушитель", link: "/towel" },
                { item: "Эксклюзив", link: "/exclusive" },
              ],
            },

            {
              title: "Документы",
              items: [
                { item: "Партнерство", link: "/partnership" },
                { item: "Документы", link: "/documents" },
                { item: "Гарантия", link: "/guarantee" },
                { item: "Контакты", link: "/contacts" },
              ],
            },
          ].map(({ title, items }, index) => (
            <li
              key={title}
              onClick={() => {
                openMenuIndex === index
                  ? setOpenMenuNav(false)
                  : setOpenMenuNav(true);
                setOpenMenuIndex(index);
              }}
            >
              <div className={style.header__nav__item__name}>
                <p>{title}</p> <BsChevronDown />
              </div>

              {openMenuNav && openMenuIndex === index && (
                <ul className={style.header__nav__item__list}>
                  {items.map(({ item, link }) => (
                    <li key={link}>
                      <Link to={link}>{item}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </nav>
      </div>

      <div className={style.header__menu}>
        <div
          className={style.header__menu__icon}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <IoMenuOutline />
        </div>

        {openMenu && (
          <div className={style.header__menu__nav}>
            <div className={style.header__menu__nav__top}>
              <img src={logo} alt="logo" />

              <div
                className={style.header__menu__icon}
                onClick={() => setOpenMenu(!openMenu)}
              >
                <IoMenuOutline />
              </div>
            </div>

            <nav>
              {[
                {
                  title: "О DAPY",
                  items: [
                    { item: "О бренде", link: "/about" },
                    { item: "Эстетика", link: "/estetic" },
                    { item: "Против привычного", link: "/against-the-usual" },
                    { item: "Атмосфера в доме", link: "/atmosphere" },
                  ],
                },

                {
                  title: "Материалы",
                  items: [
                    { item: "Качество", link: "/quality" },
                    { item: "Монтаж изделий", link: "/installation" },
                    { item: "Материалы", link: "/materials" },
                  ],
                },

                {
                  title: "Каталог",
                  items: [
                    { item: "Радиаторы", link: "/radiators" },
                    { item: "Полотенцесушитель", link: "/towel" },
                    { item: "Эксклюзив", link: "/exclusive" },
                  ],
                },

                {
                  title: "Документы",
                  items: [
                    { item: "Партнерство", link: "/partnership" },
                    { item: "Документы", link: "/documents" },
                    { item: "Гарантия", link: "/guarantee" },
                    { item: "Контакты", link: "/contacts" },
                  ],
                },
              ].map(({ title, items }) => (
                <li key={title}>
                  <h5>{title}</h5>

                  <ul>
                    {items.map(({ item, link }) => (
                      <li key={item}>
                        <Link to={link}>{item}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

              <div className={style.header__right__phone}>
                <img src={phoneImg} alt="phone" />
                <a href="tel:79200959099">+79200959099</a>
                <img src={clockImg} alt="clock" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
