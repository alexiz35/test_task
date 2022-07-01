import React from "react";
import "./menu.scss";

export default function Menu() {
    return (
        <>
            <div className={"topHeader"}/>
            <div className={"menu"}>
                <div className={"logo"}>
                    <img src={"img/Logo.svg"} alt={""}/>
                </div>
                <div className={"buttongroup"}>
                    <button className={"buttonMenu"}>
                        <span className={"p1"}><a href={'#Users'}> Users</a></span>
                    </button>
                    <button className={"buttonMenu"}>
                        <span className={"p1"}><a href={'#SignUp'}> Sign Up</a></span>
                    </button>
                </div>
            </div>
        </>
    )
}