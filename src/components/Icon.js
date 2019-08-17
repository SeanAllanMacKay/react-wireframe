import React, { useState } from 'react';

import { Icon } from 'antd';

export default (props) => {
    const [active, setActive] = useState(null);
    return (
        <a
            href={props.link}
            target={props.newTab ? "_blank" : null}
        >
            <Icon 
                type={props.type}
                theme={props.theme}
                onMouseEnter={() => {
                    setActive(true)
                }}
                onMouseLeave={() => {
                    setActive(false)
                }}
                style={{
                    color: 'white',
                    margin: '5px 0',
                    opacity: active ? 0.8 : 0.6
                }}
            />
        </a>
    );
}