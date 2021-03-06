import React from "react";
import "./imageframe.scss";

export default function Imageframe() {
    return (
        <div className={"frameImg"}>
            <div className={"groupFrames"}>
                <div className={"imgStyle"}/>
                <div className={"mainFrame"}>

                    <div className={"textFrame"}>
                        <div className={"text1"}>
                            <h1>Test assignment for front-end developer</h1>
                        </div>
                        <div className={"text2"}>
                            <div className={"p1"}>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS,
                                JS with a vast understanding of User design thinking as they'll be building web
                                interfaces with accessibility in mind. They should also be excited to learn, as the
                                world of Front-End Development keeps evolving.
                            </div>
                        </div>
                    </div>
                    <button className={"buttonImg"}>
                        <div className={"p1"}><a href={'#SignUp'}> Sign Up</a></div>
                    </button>

                </div>

            </div>

        </div>


    )
}