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
                        <p1><a href={'#Users'}> Users</a></p1>
                    </button>
                    <button className={"buttonMenu"}>
                        <p1>Sign up</p1>
                    </button>
                </div>
            </div>
        </>
    )
}