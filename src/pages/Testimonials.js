import React from 'react';

import { Card } from 'antd' 

export default (props) => {
    return (
        <div
            id='testimonials-page'
            style={{
                height: '400px',
                backgroundColor: '#054A91',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            
            <div
                style={{
                    width: '90%',
                    height: '90%',
                    overflow: 'auto',
                }}
            >
                <div
                    style={{
                        height: '100%',
                        width: '2000px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Card
                        hoverable
                        style={{ 
                            flex: 1,
                            height: '80%',
                            marginRight: '20px'
                        }}
                    />
                    <Card
                        hoverable
                        style={{ 
                            flex: 1,
                            height: '80%',
                            marginRight: '20px'
                        }}
                    />
                    <Card
                        hoverable
                        style={{ 
                            flex: 1,
                            height: '80%',
                            marginRight: '20px'
                        }}
                    />
                    <Card
                        hoverable
                        style={{ 
                            flex: 1,
                            height: '80%',
                            marginRight: '20px'
                        }}
                    />
                    <Card
                        hoverable
                        style={{ 
                            flex: 1,
                            height: '80%',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}