import React, {useState} from "react";
import toast from 'react-hot-toast';

import { Codebox } from "../components/content/codebox";
import { ResultModal } from "../components/content/result_modal";
import { Find, path_find } from "../workers/json_finder";

export interface input_values {
    isCase: boolean;
    isMatch: boolean;
    codeInput: string;
    discriminator: string;
};

export const Content: React.FC = () => {

    var [isCase, setIsCase] = useState<boolean>(false);
    var [isMatch, setIsMatch] = useState<boolean>(false);
    var [codeInput, setCodeInput] = useState<string>(`{\n  "example": "Hello world"\n}`);
    var [discriminator, setDiscriminator] = useState<string>("Hello world");
    
    var [showModal, setModal] = useState<boolean>(false);
    var [findResult, setFindeResult] = useState<Array<path_find>>([]);

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
            <ResultModal showModal={showModal} setModal={setModal} findResult={findResult}/>
            <div id="add-space"></div>
            <div id="terminal-space">
                <Codebox data_checker={data_checker} beautify_data={beautify_data} workers={{setIsCase, setIsMatch, setCodeInput, setDiscriminator}} input_data={codeInput} discriminator={discriminator} />
            </div>
            <div id="add-space">

            </div>
        </div>
    )
};