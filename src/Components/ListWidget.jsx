import React from 'react';

const ListWidget = ({ items = ["Item 1", "Item 2", "Item 3"] }) => {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <ul className="list-disc">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListWidget;
