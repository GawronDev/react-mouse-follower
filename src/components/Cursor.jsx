import React, { useEffect, useRef } from "react";

export default function Cursor() {
    const cursorRef = useRef();

    useEffect(()=>{
        document.addEventListener("mousemove", (event)=>{
            const left = event.pageX;
            const top = event.pageY;
            cursorRef.current.style.left = left + "px";
            cursorRef.current.style.top = top + "px";
        })
    }, [])

    return(
        <div className="cursor" ref={cursorRef}></div>
    )
}