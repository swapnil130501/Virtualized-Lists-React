import React, { useState } from 'react'

function VirtualizedList({list, height, width, itemHeight}) {
    const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);
    const visibleList = list.slice(indices[0], indices[1] + 1);

    function handleScroll(e) {
        const scrollTop = e.target.scrollTop;
        const newStartIndex = Math.floor(scrollTop / itemHeight);
        const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
        setIndices([newStartIndex, newEndIndex]);
    }

    return (
        <div className='container' onScroll = {handleScroll} style={{height, width, backgroundColor: "grey", overflow: "auto"}}>
            <div style = {{height: list.length * itemHeight, position: 'relative'}}>
                {visibleList.map((item, index) => {
                    return (
                        <div 
                            className='item' 
                            style={{
                                height: itemHeight, 
                                backgroundColor: "red", 
                                borderTop: "5px solid grey",
                                position: 'absolute',
                                top: (indices[0] + index) * itemHeight,
                                width: "100%",
                                textAlign: "center"
                            }} 
                            key={item}>
                            {"item " + item}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default VirtualizedList

// import React, { useState } from "react";

// function VirtualizedList({ list, height, width, itemHeight }) {
//     const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);
//     const visibleList = list.slice(indices[0], indices[1] + 1);

//     function handleScroll(e) {
//         const scrollTop = e.target.scrollTop;
//         const newStartIndex = Math.floor(scrollTop / itemHeight);
//         const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
//         setIndices([newStartIndex, newEndIndex]);
//     }

//     return (
//         <div
//             className="container"
//             onScroll={handleScroll}
//             style={{
//                 height,
//                 width,
//                 backgroundColor: "grey",
//                 overflow: "auto",
//             }}
//         >
//             <div
//                 style={{
//                     height: list.length * itemHeight,
//                     position: "relative",
//                 }}
//             >
//                 {visibleList.map((item, index) => {
//                     const globalIndex = indices[0] + index; // Global index of the item
//                     return (
//                         <div
//                             className="item"
//                             style={{
//                                 height: itemHeight,
//                                 backgroundColor: "red",
//                                 borderTop: "5px solid grey",
//                                 transform: `translateY(${globalIndex * itemHeight}px)`,
//                                 width: "100%",
//                                 textAlign: "center",
//                                 position: "absolute", // Still needs to stay in the flow
//                                 left: 0, // Ensure proper horizontal alignment
//                             }}
//                             key={item}
//                         >
//                             {"item " + item}
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// export default VirtualizedList;

