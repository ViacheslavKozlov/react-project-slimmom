import React from "react";
import style from "./RightSideBar.module.css";

function RightSideBar() {
  return (
    <>
      <aside className={style.sideBar}>
        <div>
          <h3>Сводка за ${}</h3>
          <ul>
            <li>
              Осталось<span>{"${}ккал" && "000 ккал"}</span>
            </li>
            <li>
              Употреблено<span>{"${}ккал" && "000 ккал"}</span>
            </li>
            <li>
              Дневная норма<span>{"${}ккал" && "000 ккал"}</span>
            </li>
            <li>
              n% от нормы<span>{"${}ккал" && "000 ккал"}</span>
            </li>
          </ul>
        </div>
        <div>
          <h3>Нерекомендуемые продукты</h3>
          <p>{"${}" && "Здесь будет отображаться ваш рацион"}</p>
        </div>
      </aside>
    </>
  );
}

export default RightSideBar;
