import React from "react";
import Key from "./Key";

const Piano = () => {
    return (
        <div className="piano">
            <Key title1="A"></Key>
            <Key title1="S" title2="W" black="true"></Key>
            <Key title1="D" title2="E" black="true"></Key>
            <Key title1="F"></Key>
            <Key title1="G" title2="T" black="true"></Key>
            <Key title1="H" title2="Y" black="true"></Key>
            <Key title1="J" title2="U" black="true"></Key>
            <Key title1="K"></Key>
            <Key title1="L" title2="O" black="true"></Key>
            <Key title1=";" title2="P" black="true"></Key>
            <Key title1="'"></Key>
            <Key black="true"></Key>
            <Key black="true"></Key>
            <Key black="true"></Key>
            <Key></Key>
            <Key></Key>
            <Key black="true"></Key>
            <Key black="true"></Key>
            <Key></Key>
        </div>
    );
};

export default Piano;
