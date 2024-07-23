import React from 'react';

const ButtonWidget = ({ text = "Click Me" }) => {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">{text}</button>
        </div>
    );
};

export default ButtonWidget;
