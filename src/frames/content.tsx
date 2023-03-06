import React from "react";
import { Codebox } from "../components/content/codebox";

export const Content: React.FC = () => {

    const JSON_checker = (object:any) => {

    }
    return (
        <div className="Content">
            <div id="add-space"></div>
            <div id="terminal-space">
                <Codebox/>
            </div>
            <div id="add-space"></div>
        </div>
    )
};