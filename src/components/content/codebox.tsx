import React from "react";
interface params {
    data_checker: () => void;
    beautify_data: () => void;
    workers: {
        setIsCase: React.Dispatch<React.SetStateAction<boolean>>;
        setIsMatch: React.Dispatch<React.SetStateAction<boolean>>;
        setCodeInput: React.Dispatch<React.SetStateAction<string>>;
        setDiscriminator: React.Dispatch<React.SetStateAction<string>>;
    };
    input_data: string;
    discriminator: string;
};

export const Codebox: React.FC<params> = ({data_checker, beautify_data, workers, input_data, discriminator}) => {

    return (
        <div id="action-area">
            <div id="header-actions">
                <label id="pannel-tittle">Paste here your object</label>
            </div>
            <textarea id="code-textarea" value={input_data} onChange={(e) => {workers.setCodeInput(e.target.value)}}></textarea>
            <div id="action-buttons">
                <div id="input-area">
                    <label className="input-label">What do you want to find?</label>
                    <input id="find-input" value={discriminator} onChange={(e) => {workers.setDiscriminator(e.target.value)}}></input>
                </div>
                <div id="actions-area">
                    <div id="options-part">
                        <div className="checkbox-frame">
                            <input type="checkbox" className="option-box" onChange={(e) => {workers.setIsCase(e.target.checked)}}></input>
                            <label className="input-label">Case sensitive</label>
                        </div>
                        <div className="checkbox-frame">
                            <input type="checkbox" className="option-box" onChange={(e) => {workers.setIsMatch(e.target.checked)}}></input>
                            <label className="input-label">Not Exact match</label>
                        </div>
                    </div>
                    <div id="buttons-part" style={{}}>
                        <button id="find-button" onClick={() => data_checker()}>Find</button>
                        <button id="find-button" onClick={() => beautify_data()}>Beautify</button>
                    </div>
                </div>
            </div>
        </div>
    )
};