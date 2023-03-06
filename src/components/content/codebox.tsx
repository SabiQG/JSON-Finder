import React from "react";

export const Codebox: React.FC = () => {

    return (
        <div id="action-area">
            <div id="header-actions">
                <label id="pannel-tittle">Paste here your object</label>
            </div>
            <textarea  id="code-textarea"></textarea>
            <div id="action-buttons">
                <div id="input-area">
                    <label className="input-label">What do you want to find?</label>
                    <input id="find-input" placeholder="Example: Birds"></input>
                </div>
                <div id="actions-area">
                    <div className="options-part">
                        <div className="checkbox-frame">
                            <input type="checkbox" className="option-box"></input>
                            <label className="input-label">Case sensitive</label>
                        </div>
                        <div className="checkbox-frame">
                            <input type="checkbox" className="option-box"></input>
                            <label className="input-label" >Exact match</label>
                        </div>
                    </div>
                    <div className="options-part" style={{alignItems: "center"}}>
                        <button id="find-button">Find</button>
                    </div>
                </div>
            </div>
        </div>
    )
};