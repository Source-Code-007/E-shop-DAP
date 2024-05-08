import { useRef, useState } from "react";
import { BiCategory, BiPrinter } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";
import { useReactToPrint } from "react-to-print";
import logo from '/assets/img/logo.png'

const ProductDetailsModal = ({ product }) => {
    const { id, image, price, title, description, category } = product || {}


    const printContentRef = useRef(null)
    const handlePrint = useReactToPrint({
        content: () => printContentRef.current,
        documentTitle: `Invoice-${title}-${id}`,
        // onBeforePrint: () => {console.log("before printing...");},
        // onAfterPrint: () => {console.log("after printing...");},
        removeAfterPrint: true,
    });

    return (
        <dialog id="productDetailsModal" className="modal">
            <div className="modal-box">

                <div className="space-y-3 text-gray-600 mt-[10px]">
                    <img src={image} alt={title} className="w-full h-[160px] md:h-[220px] group-hover:scale-105 transition-all mb-2" />
                    <p className="text-lg flex gap-1 items-center"> <BiCategory /> {category}</p>
                    <h2 className="font-semibold text-xl md:text-3xl text-black">{title}</h2>
                    <p className="text-md font-normal">{description}</p>
                    <p className="text-md font-bold">${price}</p>
                </div>




                {/* Component to be print */}
                <div className={`font-bold bg-slate-100 min-h-screen text-black text-center}`} id="printContent" ref={printContentRef}>

                    <div className="mx-6 py-8 space-y-7">
                        {/* Header */}
                        <div className="flex gap-2 justify-between items-center">
                            <img src={logo} alt={'E shop'} className="h-16 w-16 rounded-full shadow-md" />
                            <h2 className="font-bold text-xl">E shop</h2>
                        </div>

                        {/* Invoice info */}
                        <div className="flex gap-2 items-center justify-between">
                            <h2 className="font-semibold">Invoice no: {id}</h2>

                            <div className="space-y-1">
                                <p>BTI Premier Shopping Mall</p>
                                <p>Uttar Badda, Dhaka</p>
                            </div>
                        </div>

                        {/* Bill to */}
                        <div className="flex gap-2 items-center justify-between">
                            <div className="space-y-1">
                                <h2 className="font-semibold">Bill to </h2>
                                <p>Md Shariful Islam</p>
                            </div>

                            <div className="space-y-1 text-right">
                                <h2>{new Date().toLocaleTimeString()}</h2>
                                <h2>{new Date().toLocaleDateString()}</h2>
                            </div>
                        </div>

                        {/* Products */}
                        <div className="relative overflow-x-auto my-6 md:my-8">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead
                                    className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-b-myRed">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Product Id
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Product name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Product category
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Qty
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        [1,2,3,4,5].map((elem, ind)=> {
                                            return   <tr key={ind} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-semibold">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {ind+1}
                                            </th>
                                            <td className="px-6 py-4">
                                                {title}
                                            </td>
                                            <td className="px-6 py-4">
                                                {category}
                                            </td>
                                            <td className="px-6 py-4">
                                                {ind+2}
                                            </td>
                                            <td className="px-6 py-4">
                                                {price}
                                            </td>
                                        </tr>
                                        })
                                    }
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-semibold">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            
                                        </th>
                                        <td className="px-6 py-4">
                                            
                                        </td>
                                        <td className="px-6 py-4">
                                            
                                        </td>
                                       
                                        <td className="px-6 py-4">
Total
                                        </td>
                                        <td className="px-6 py-4">
                                           {price*5}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

                <div className="modal-action">
                    <form method="dialog">
                        <button className="h-6 w-6 rounded-full flex justify-center items-center bg-orange-500 shadow-md absolute top-1 right-1"><FaXmark /></button>

                        {/* Print */}
                        <span onClick={() => { handlePrint() }} className="h-6 w-6 rounded-full flex justify-center items-center bg-[#0f1d22] text-white shadow-md absolute top-1 right-10 cursor-pointer"><BiPrinter /></span>
                    </form>
                </div>

            </div>
        </dialog>
    );
};

export default ProductDetailsModal;