import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestMenu } from "../../Redux/Reducers/menuReducer";
import { getMenu } from "../../Redux/Selectors/menuSelector";
import './Menu.scss'
import { Product } from "./Product/Product";

export const Menu: FC = () => {

    const menu = useSelector(getMenu)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestMenu())
    }, [])

    return (
        <div className="menu-content">
            <div className="container">
                <div className="menu">

                    <div className="menu-category">
                        <span className="category__title">Pizza</span>
                        <a href="/" className="menu-category__link">Go to Pizzas</a>
                    </div>
                    <hr />

                    <div className="menu-items">
                        {menu.map(product =>
                            <Product key={product.id} image={product.image} name={product.name} price={product.price} />
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}