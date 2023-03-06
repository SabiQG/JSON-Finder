import React from 'react';

export const Header: React.FC = () => {

    const redirect = (path:string):void => {
        window.location.href = 'https://github.com/'+path;
    };

    return (
        <div className='Header'>
            <div id='header-tittle'>
                <label id='site-tittle'>JSON Finder</label>
            </div>
            <div id='header-options'>
                <div style={{margin:"20px"}}>
                    <button className='gh-button' onClick={() => redirect("SabiQG")}>@SabiQG</button>
                </div>
                <div>
                    <button className='gh-button' onClick={() => redirect("SabiQG/JSON-Finder")}>Code</button>
                </div>
            </div>
        </div>
    )
};