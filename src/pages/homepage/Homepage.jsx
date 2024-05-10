import axios from "axios";
import { useEffect, useState } from "react";
import MyMotion from "../../components/helpingCompo/MyMotion";
import { GiLinkedRings } from "react-icons/gi";
import ProductDetailsModal from "../../components/helpingCompo/ProductDetailsModal";
import ProductCard from "../../components/homepage/ProductCard";

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
            <MyMotion y={20}>
            <div className="my-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
                {products.map((product, ind) => {
                    return  <ProductCard key={ind} productDetails={product} setProduct={setProduct}/>
                })}
            </div>
                </MyMotion>


            {/* Product details  modal */}
            <ProductDetailsModal product={product} />

        </section>
    );
};

export default Homepage;