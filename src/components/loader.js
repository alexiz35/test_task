import React from "react";
import "./loader.css"

export default function  Loader() {
    return (
    <div className={"loadFrame"}>
        <div className={"ldsRing"}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    )
}