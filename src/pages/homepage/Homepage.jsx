import axios from "axios";
import { useEffect, useState } from "react";
import MyMotion from "../../components/helpingCompo/MyMotion";
import { GiLinkedRings } from "react-icons/gi";
import ProductDetailsModal from "../../components/helpingCompo/ProductDetailsModal";

const Homepage = () => {
    const [productsLoading, setProductsLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})

    useEffect(() => {
        setProductsLoading(true)
        axios('https://fakestoreapi.com/products').then(res => {
            setProductsLoading(false)
            setProducts(res.data)
            console.log(res.data);
        }).catch(e => {
            setProductsLoading(false)
            console.log(e);
        })
    }, [])

    if (productsLoading) {
        return <div className="h-screen flex items-center justify-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }

    return (
        <section className="p-2 font-bold py-[100px]">
            <div className="my-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
                {products.map((product, ind) => {
                    return <MyMotion key={ind} y={20}>
                        <div className="shadow-md rounded cursor-pointer overflow-hidden relative group" onClick={()=> {setProduct(product); document.getElementById('productDetailsModal').showModal()}}>
                            <img src={product.image} alt={product.title} className="w-full h-[120px] md:h-[150px] group-hover:scale-105 transition-all mb-2" />

                            <div className="p-2 space-y-1">
                                <h2 className="truncate">{product.title}</h2>
                                <h2>{product.price}</h2>
                                <p className="truncate font-normal text-gray-600">{product.description}</p>
                                <h2>{product.category}</h2>
                            </div>

                            {/* Hover effect */}
                            <div className="bg-slate-900 bg-opacity-60 h-full w-full absolute top-0 left-0 right-0 transition-all duration-200 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                                <GiLinkedRings size={24} className="text-orange-500" />
                            </div>
                        </div>
                    </MyMotion>
                })}
            </div>


{/* Product details  modal */}
<ProductDetailsModal product={product}/>

        </section>
    );
};

export default Homepage;