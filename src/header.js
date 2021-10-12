import React from "react";
import './style.css'

class Main extends React.Component{
    render(){
        return(
            <div className="nav">
                <div className="nav_wrap">
                    <div className="left_wrap">
                        <p>ITEC</p>
                    </div>
                    <div className="right_wrap">
                        <ul className="right_wrap_ul">
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">Список групп</a></li>
                            <li><a href="#">Чат</a></li>
                            <li><a href="#">Расписание</a></li>
                            <li><a href="#">Преподаватели</a></li>
                            <li><a href="#">Расходы</a></li>
                            <li><a href="#">Обработка запроса</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Main;