import React from "react";
import style from "./Materials.module.scss";
import MaterialsImg01 from "../../images/Materials/MaterialsImg01.jpg";
import MaterialsImg02 from "../../images/Materials/MaterialsImg02.jpg";
import MaterialsImg03 from "../../images/Materials/MaterialsImg03.jpg";
import MaterialsImg04 from "../../images/Materials/MaterialsImg04.jpg";

const Materials = () => {
  return (
    <main className={style.materials}>
      <div className="container">
        <h3>Материалы</h3>
      </div>

      <div className="container">
        <ul className={style.materials__list}>
          <li className={style.materials__item}>
            <img src={MaterialsImg01} alt="matrials" />
          </li>

          <li>
            <p>
              <span>Водяные версии радиаторов отопления DAPY</span> Имеют внутри
              коллектор из нержавеющих труб – они сварены из стали марки AISI
              304 L.
            </p>
          </li>

          <li>
            <img src={MaterialsImg02} alt="materials" />
          </li>

          <li>
            <p>
              <span>
                DAPY окрашены в процессе производства композитного материала
              </span>{" "}
              - пигментными, водостойкими красками.
            </p>
          </li>

          <li>
            <img src={MaterialsImg03} alt="materials" />
          </li>

          <li>
            <p>
              <span>Композитный материал корпусов (фасадов)</span> изделий
              состоит из сплава алюминиевой крошки и природного камня (горного
              кварца). Мы называем этот уникальный материал нашей собственной
              разработки - СТАЛИКАМЕНЬ.
            </p>
          </li>

          <li>
            <img src={MaterialsImg04} alt="materials" />
          </li>

          <li>
            <p>
              <span>
                У электрических версий в качестве нагревательного элемента
              </span>
              мы используем углеродистый, оптоволоконный греющий кабель.
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Materials;
