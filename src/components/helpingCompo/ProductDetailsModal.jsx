import { BiCategory, BiPrinter, BiSolidPrinter } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";

const ProductDetailsModal = ({ product }) => {
    //     "id": 2,
    // "title": "Mens Casual Premium Slim Fit T-Shirts ",
    // "price": 22.3,
    // "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    // "category": "men's clothing",
    // "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    // "rating": {
    // "rate": 4.1,
    // "count": 259
    // }

    const { id, image, title, description, category } = product || {}

    return (
        <dialog id="productDetailsModal" className="modal">
            <div className="modal-box">

                <div className="space-y-3 text-gray-600 mt-[10px]">
                <img src={image} alt={title} className="w-full h-[160px] md:h-[220px] group-hover:scale-105 transition-all mb-2" />
                    <p className="text-lg flex gap-1 items-center"> <BiCategory/> {category}</p>
                    <h2 className="font-semibold text-xl md:text-3xl text-black">{title}</h2>
                    <p className="text-md font-normal">{description}</p>
                </div>



                <div className="modal-action">
                    <form method="dialog">
                        <button className="h-6 w-6 rounded-full flex justify-center items-center bg-orange-500 shadow-md absolute top-1 right-1"><FaXmark /></button>
                        <span className="h-6 w-6 rounded-full flex justify-center items-center bg-[#0f1d22] text-white shadow-md absolute top-1 right-10 cursor-pointer"><BiPrinter/></span>
                    </form>
                </div>

            </div>
        </dialog>
    );
};

export default ProductDetailsModal;