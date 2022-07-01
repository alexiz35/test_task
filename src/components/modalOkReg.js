import React from "react";


export default function ModalOkReg(props) {

    const styleModal = {
        width: '100%',
        height: '780px',
        backgroundColor: 'white',
        zIndex: 9999,
        position: 'absolute',
        opacity: '80%',
        visibility: 'visible'
    }
    const styleModalHide = {
        width: '100%',
        height: '780px',
        backgroundColor: 'white',
        zIndex: 9999,
        position: 'absolute',
        opacity: '80%',
        visibility: 'hidden'
    }
    const styleImg = {
        width: '320px',
        margin: "auto",
        marginTop: '50%'
    }

    return (
        <>
            <div className={"modal"} style={props.hide ? styleModal : styleModalHide}>
                <div style={styleImg}>
                    <img src={"img/success-image.svg"} align={"center"} width={"320px"} alt=""/>
                </div>
            </div>
        </>
    )
}