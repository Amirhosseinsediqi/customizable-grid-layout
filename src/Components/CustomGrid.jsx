import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import TextWidget from './TextWidget';
import ImageWidget from './ImageWidget';
import ButtonWidget from './ButtonWidget';
import ChartWidget from './ChartWidget';
import ListWidget from './ListWidget';
import { v4 as uuidv4 } from 'uuid';

const ResponsiveGridLayout = WidthProvider(Responsive);

const CustomGrid = () => {
    const [layout, setLayout] = useState([]);
    const [widgets, setWidgets] = useState([]);
    const [maxWidgets, setMaxWidgets] = useState(false);

    const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
    const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };

    // Load layout and widgets from local storage
    useEffect(() => {
        const savedLayout = JSON.parse(localStorage.getItem('gridLayout')) || [];
        const savedWidgets = JSON.parse(localStorage.getItem('gridWidgets')) || [];
        if (savedLayout.length > 0) setLayout(savedLayout);
        if (savedWidgets.length > 0) setWidgets(savedWidgets);
    }, []);

    // Save layout and widgets to local storage
    useEffect(() => {
        localStorage.setItem('gridLayout', JSON.stringify(layout));
        localStorage.setItem('gridWidgets', JSON.stringify(widgets));
    }, [layout, widgets]);

    const addWidget = (type) => {
        if (maxWidgets) {
            alert("No more room to add widgets.");
            return;
        }
        const id = uuidv4();
        const newItem = {
            i: id,
            x: 0,
            y: Infinity, // places it at the bottom
            w: 2,
            h: 2,
            widgetType: type,
        };
        setLayout((prevLayout) => [...prevLayout, newItem]);
        setWidgets((prevWidgets) => [...prevWidgets, { id, type }]);
    };

    const renderWidget = (widget) => {
        switch (widget.type) {
            case 'Text':
                return <TextWidget key={widget.id} text="This is a text widget." />;
            case 'Image':
                return <ImageWidget key={widget.id} />;
            case 'Button':
                return <ButtonWidget key={widget.id} />;
            case 'Chart':
                return <ChartWidget key={widget.id} />;
            case 'List':
                return <ListWidget key={widget.id} />;
            default:
                return null;
        }
    };

    const onLayoutChange = (newLayout) => {
        if (JSON.stringify(newLayout) !== JSON.stringify(layout)) {
            setLayout(newLayout);
            checkMaxWidgets(newLayout);
        }
    };

    const checkMaxWidgets = (newLayout) => {
        const totalHeight = newLayout.reduce((max, item) => Math.max(max, item.y + item.h), 0);
        const maxHeight = Math.floor(window.innerHeight / 150); // Adjust based on row height
        setMaxWidgets(totalHeight > maxHeight);
    };

    return (
        <div className="p-4">
            <h2 className="text-center mb-4">Customizable Grid Layout</h2>
            <div className="mb-4 flex justify-center">
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-700 transform hover:scale-105 transition duration-300"
                    onClick={() => addWidget('Text')}
                >
                    Add Text Widget
                </button>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-700 transform hover:scale-105 transition duration-300"
                    onClick={() => addWidget('Image')}
                >
                    Add Image Widget
                </button>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-700 transform hover:scale-105 transition duration-300"
                    onClick={() => addWidget('Button')}
                >
                    Add Button Widget
                </button>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-700 transform hover:scale-105 transition duration-300"
                    onClick={() => addWidget('Chart')}
                >
                    Add Chart Widget
                </button>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-700 transform hover:scale-105 transition duration-300"
                    onClick={() => addWidget('List')}
                >
                    Add List Widget
                </button>
            </div>
            <ResponsiveGridLayout
                className="layout"
                layouts={{ lg: layout }}
                breakpoints={breakpoints}
                cols={cols}
                onLayoutChange={onLayoutChange}
            >
                {widgets.map((widget) => (
                    <div key={widget.id} className="bg-white border rounded shadow h-full relative overflow-hidden m-2 p-2">
                        <div className="drag-handle bg-gray-200 p-2 cursor-move">Drag Here 👋</div>
                        <div className="w-full h-full p-2 box-border overflow-hidden">
                            {renderWidget(widget)}
                        </div>
                    </div>
                ))}
            </ResponsiveGridLayout>
        </div>
    );
};

export default CustomGrid;
