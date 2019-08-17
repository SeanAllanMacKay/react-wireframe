import React from 'react';

import { Button, Tooltip } from 'antd'

export default (props) => {
    const { content, disabled, type, tooltip, style, onClick } = props;
    return (
        <Tooltip
            title={tooltip}
        >
            <Button
                disabled={disabled}
                type={type}
                style={style}
                onClick={onClick}
            >
                {content}
            </Button>
        </Tooltip>
    );
}