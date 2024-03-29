import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../Redux/Reducers/cartReducer";
import { requestMenu } from "../../Redux/Reducers/menuReducer";
import { getIsFetching, getMenu } from "../../Redux/Selectors/menuSelector";
import { ProductsType } from "../../types/types";
import PreLoader from "../common/preloader/Preloader";
import './Menu.scss'
import { Product } from "./Product/Product";

export const Menu: FC = () => {

    const menu = useSelector(getMenu)
    const isFetching = useSelector(getIsFetching)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestMenu())
    }, [dispatch])

    let handleAddToCart = (product: ProductsType) => {
        dispatch(AddToCart(product))
    }

    return (
        // true ? <PreLoader/> :
        <div className="menu-content">
            {isFetching ? <PreLoader /> :
                <div className="container">
                    <div className="menu">

                        <div className="menu-category">
                            <span className="category__title">Pizza</span>
                            <a href="/" className="menu-category__link">Go to Pizzas</a>
                        </div>
                        <hr />

                        <div className="menu-items">
                            {menu.map(product =>
                                <Product key={product.id} product={product} addToCart={handleAddToCart} />
                            )}
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}