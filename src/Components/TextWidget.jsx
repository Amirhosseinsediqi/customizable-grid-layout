import React from 'react';

const TextWidget = ({ text = "This is a text widget." }) => {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <p>{text}</p>
        </div>
    );
};

export default TextWidget;


