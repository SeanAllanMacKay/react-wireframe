import React, { useContext } from 'react';

import ScreenContext from '../context/ScreenContext'

import hand from '../images/hand.jpg'

export default (props) => {
    const screenSize = useContext(ScreenContext)
    return (
        <div
            id='about-page'
            style={{
                minHeight: '100vh',
                padding: screenSize.medium ? 
                    '0px' :
                    screenSize.large ?
                    '50px' :
                    '100px',
                display: 'flex',
                flexDirection: screenSize.medium ? 
                    'column-reverse' :
                    'row'
            }}
        >
            <div
                style={{
                    flex: screenSize.medium ? 
                        8 :
                        screenSize.large ? 
                        1.75 :
                        1.25,
                    background: `url(${hand})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'none',
                    backgroundSize: 'cover',
                }}
            ></div>
            <div
                style={{
                    flex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: screenSize.medium ? '20px' : '0 0 0 40px',
                    margin: 0,
                    overflow: 'auto'
                }}
            >
                <h2
                    style={{
                        fontSize: '4em'
                    }}
                >
                    Lorem Ipsum
                </h2>
                <p
                    style={{
                        fontSize: '1.5em'
                    }}
                >
                    Ius eu quot summo deleniti, cibo idque ne has. Nisl aperiri verterem an mei. Usu id rationibus scripserit. Mei te dicta persequeris reprehendunt, ei dolore utamur pri. Vis rebum omnes blandit ne.
                </p>
            </div>
        </div>
    );
}