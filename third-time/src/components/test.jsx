import React from "react";

export default function Test({children, onClick}) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}