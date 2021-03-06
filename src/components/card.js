import React from "react";
import "./card.scss"

export default function Card(props) {

    return (
        <>

            <div className={"frameCard"}>
                <div className={"borderCard"}>
                    <div className={"userIco"}>
                        <img
                            src={props.data.photo === "" ? "photo-cover.svg" : props.data.photo}
                            alt={''}
                            style={{borderRadius: "50%"}}
                        />
                    </div>
                    <div className={"nameCard"}>
                        <div className={"tooltip"}>
                            <div className={"wrap"}>
                                <span className={"wrapText"}>
                                    {props.data.name}
                                </span>
                            </div>
                            <span className={"tooltiptext"}>{props.data.name}</span>
                        </div>
                    </div>
                    <div className={"textCard"}>
                        <div className={"tooltip"}>
                            <div className={"wrap"}>
                                <span className={"wrapText"}>{props.data.position}</span>
                            </div>
                            <span className={"tooltiptext"}>{props.data.position}</span>
                        </div>
                        <div className={"tooltip"}>
                            <div className={"wrap"}>
                                <span className={"wrapText"}>{props.data.email}</span>
                            </div>
                            <span className={"tooltiptext"}>{props.data.email}</span>
                        </div>
                        <div className={"tooltip"}>
                            <div className={"wrap"}>
                                <span className={"wrapText"}>{props.data.phone}</span>
                            </div>
                            <span className={"tooltiptext"}>{props.data.phone}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}