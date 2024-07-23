import React from 'react';

const ImageWidget = ({ src = "https://i.pinimg.com/564x/31/a9/4a/31a94abe25af76f0ab616faafd704504.jpg", alt = "Placeholder" }) => {
    return (
        <div className="image-widget-container">
            <img
                src={src}
                alt={alt}
                className="image-widget-image w-full h-full object-cover"
            />
        </div>
    );
};

export default ImageWidget;
