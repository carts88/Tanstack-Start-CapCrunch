import React, { useState } from "react"

interface IUseDragDrop {
    // Add your props here
}


export const useDragDrop = ({/**Enter Props */} :  IUseDragDrop) => {

    const positions = [
       {x: 0, y: 0}

    ]

    function handleDragStart(e: React.DragEvent) {
        const id = Number(e.dataTransfer.getData("id"))
        

    }

    function handleDragEnd(e: React.DragEvent) {
        const target = ""
    
        if(!target) return // If there is no target, it returns to the original position

    }


}