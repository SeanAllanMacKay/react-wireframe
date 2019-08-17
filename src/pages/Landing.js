import React, { useContext } from 'react';

import ScreenContext from '../context/ScreenContext'

import solarPanel from '../images/solar-panel.jpg'

export default (props) => {
    const screenSize = useContext(ScreenContext)
    return (
        <div
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.25)), url(${solarPanel})`,
                height: 'calc(100vh - 49px)',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'none',
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            <h1
                style={{
                    color: 'white',
                    fontSize: screenSize.extraSmall ? 
                        '3em' :
                        '4em',
                    margin: '20px 0'
                }}
            >
                LOREM IPSUM
            </h1>
            <div
                style={{
                    width: '60vw',
                    textAlign: 'center'
                }}
            >
                <h2
                    style={{
                        fontSize: screenSize.extraSmall ? 
                        '2em' :
                        '3em',
                        color: 'white'
                    }}
                >
                    dolor sit amet, ad his quod comprehensam, vix veritus inimicus
                </h2>
            </div>
            
        </div>
    );
}