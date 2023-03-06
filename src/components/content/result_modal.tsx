import React from "react";

import { ResultDiv } from "./result_div";

import { path_find } from "../../workers/json_finder";

interface params {
    showModal:boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    findResult: path_find[];
}

export const ResultModal: React.FC<params> = ({showModal, setModal, findResult}) => {

    return (
        <div id="full-zone" style={{display: showModal ? "flex" : "none" }}>
            <div id="modal-area">
                <div id="header-actions">
                    <div>
                        <label id="pannel-tittle">Results</label>
                    </div>
                    <div id="pannel-close" onClick={() => {setModal(false)}}>x</div>
                </div>
                <div id="result-content">
                    {findResult.map((result) => {
                        return <ResultDiv key={result.path} result={result} />;
                    })}
                </div>
            </div>
        </div>
    );
};