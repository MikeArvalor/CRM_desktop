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
                        <ul>
                            <li>Главная</li>
                            <li>Группы</li>
                            <li>Расписание</li>
                            <li>Личный кабинет</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Main;