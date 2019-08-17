import React, { useState, useContext } from 'react';

import ScreenContext from '../context/ScreenContext'

import Icon from './Icon';

export default (props) => {
    const screenSize = useContext(ScreenContext)
    return (
        <>
            <div
                id='social-links'
                style={{
                    position: 'fixed',
                    right: 0,
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    zIndex: '500'
                }}
            >
                <div
                    style={{
                        padding: screenSize.extraSmall ? '15px' : '20px',
                        borderRadius: '20px 0px 0px 20px',
                        backgroundColor: 'rgba(5,74,145,0.5)',
                        display: 'flex',
                        flexDirection: 'column',
                        fontSize: screenSize.extraSmall ? 
                            '1.5em' :
                            screenSize.small ?
                            '2em' :
                            '3em',
                        color: 'white'
                    }}
                >
                    <Icon 
                        type="facebook" 
                        theme="filled"
                        link="https://www.facebook.com"
                        newTab
                    />
                    <Icon 
                        type="instagram" 
                        theme="filled"
                        link="https://www.instagram.com"
                        newTab
                    />
                    <Icon 
                        type="twitter"
                        link="https://www.twitter.com"
                        newTab
                    />
                    <Icon 
                        type="mail" 
                        theme="filled"
                        link="mailto:seanallanmackay@gmail.com"
                    />
                </div>
            </div>
        </>
    );
}