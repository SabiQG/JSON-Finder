import React, {useState} from "react";

import { Codebox } from "../components/content/codebox";
import json_finder from "../workers/json_finder";

export interface input_values {
    isCase: boolean;
    isMatch: boolean;
    codeInput: string;
    discriminator: string;
}

export const Content: React.FC = () => {

    var [isCase, setIsCase] = useState<boolean>(false);
    var [isMatch, setIsMatch] = useState<boolean>(false);
    var [codeInput, setCodeInput] = useState<string>(`{\n  "example": "Hello world"\n}`);
    var [discriminator, setDiscriminator] = useState<string>("Hello world");

    const data_checker = ():void => {
        try {
            var parser = new json_finder(JSON.parse(codeInput), discriminator, isMatch, isCase);
            console.log(parser.result);
        } catch (e) {
            console.log(e)
        };
    };

    const beautify_data = ():void => {
        try {
            setCodeInput(JSON.stringify(JSON.parse(codeInput), null, 2));
        } catch (e) {
            console.log(e)
        };
    };

    return (
        <div className="Content">
            <div id="add-space"></div>
            <div id="terminal-space">
                <Codebox data_checker={data_checker} beautify_data={beautify_data} workers={{setIsCase, setIsMatch, setCodeInput, setDiscriminator}} input_data={codeInput} discriminator={discriminator} />
            </div>
            <div id="add-space"></div>
        </div>
    )
};