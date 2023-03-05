import React from 'react';
import GitHubButton from 'react-github-btn'

export const Header: React.FC = () => {
    return (
        <div className='Header'>
            <div id='header-tittle'>
                <label id='site-tittle'>JSON Finder</label>
            </div>
            <div id='header-options'>
                <div style={{margin:"20px"}}>
                    <GitHubButton href="https://github.com/SabiQG" data-size="large" aria-label="Follow @SabiQG on GitHub">Follow @SabiQG</GitHubButton>
                </div>
                <div>
                    <GitHubButton href="https://github.com/SabiQG/JSON-Finder" data-icon="octicon-star" data-size="large" aria-label="Star SabiQG/JSON-Finder on GitHub">Star</GitHubButton>
                </div>
            </div>
        </div>
    )
};