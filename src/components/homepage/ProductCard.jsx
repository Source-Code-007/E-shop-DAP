import { useState } from 'react';
import MyMotion from '../helpingCompo/MyMotion';

const ProductCard = ({ productDetails, setProduct }) => {
    const { title, image, price, category, description } = productDetails || {}

    // Overlay
    const [overlayPosition, setOverlayPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const handleMouseMove = (e) => {
        const cardRect = e.currentTarget.getBoundingClientRect();
        setOverlayPosition({
            x: (e.clientX - cardRect.left) + 12,
            y: (e.clientY - cardRect.top) + 12,
        });
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };


    return (
        <MyMotion y={20}>

            <div className="rounded shadow-md p-4 overflow-hidden cursor-pointer relative bg-white text-black"

                onClick={() => { setProduct(productDetails); document.getElementById('productDetailsModal').showModal() }}

                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <img src={image} alt={title} className="w-full h-[120px] md:h-[150px] group-hover:scale-105 transition-all mb-2" />
                <h2 className="truncate">{title}</h2>
                <h2>${price}</h2>
                <p className="truncate font-normal text-gray-600">{description}</p>
                <h2>{category}</h2>

                {/* Overlay */}
                {isVisible &&
                    <div className='hidden md:block bg-orange-500 bg-opacity-80 rounded-md shadow p-4 space-y-2 text-center text-white text-nowrap w-[200px]'
                        style={{
                            position: 'absolute',
                            top: `${overlayPosition.y}px`,
                            left: `${overlayPosition.x}px`,
                        }}
                    >
                        <h2 className='font-bold text-lg truncate'>{title}</h2>
                        <p>{category}</p>
                        <p>${price}</p>
                    </div>
                }

            </div>
        </MyMotion>

    );
};

export default ProductCard;
