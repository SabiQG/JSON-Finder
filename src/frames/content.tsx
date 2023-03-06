import React, {useState} from "react";
import toast from 'react-hot-toast';

import { Codebox } from "../components/content/codebox";
import { Find, path_find } from "../workers/json_finder";

interface props {
    setFindeResult: React.Dispatch<React.SetStateAction<path_find[]>>;
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const Content: React.FC<props> = ({setFindeResult, setModal}) => {

    var [isCase, setIsCase] = useState<boolean>(false);
    var [isMatch, setIsMatch] = useState<boolean>(false);
    var [codeInput, setCodeInput] = useState<string>(`{\n  "example": "Hello world"\n}`);
    var [discriminator, setDiscriminator] = useState<string>("Hello world");

    const data_checker = ():void => {
        try {
            var parser = new Find(JSON.parse(codeInput), discriminator, isMatch, isCase);
            setFindeResult(parser.result);
            setModal(true);
        } catch (e) {
            toast(`Error parsing JSON`, {  position: "bottom-right", icon: '🌋' });
        };
    };

    const beautify_data = ():void => {
        try {
            setCodeInput(JSON.stringify(JSON.parse(codeInput), null, 2));
            toast(`JSON beautified!`, {  position: "bottom-right", icon: '✅' });
        } catch (e) {
            toast(`Error parsing JSON`, {  position: "bottom-right", icon: '🌋' });
        };
    };

    return (
        <div className="Content">
            <div id="add-space"></div>
            <div id="terminal-space">
                <Codebox data_checker={data_checker} beautify_data={beautify_data} workers={{setIsCase, setIsMatch, setCodeInput, setDiscriminator}} input_data={codeInput} discriminator={discriminator} />
            </div>
            <div id="add-space">

            </div>
        </div>
    )
};