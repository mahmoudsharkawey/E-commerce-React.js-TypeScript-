import { Button, Spinner } from "react-bootstrap";
import styles from "./style.module.css";
import { TProduct } from "@customTypes/product";
import { addToCart } from "@store/cart/cartSlice";
import { useDispatch } from "react-redux";
import { memo, useEffect, useState } from "react";

const { product, productImg, maximumNotice } = styles;

const Product = memo(({ id, title, price, img, max, quantity }: TProduct) => {
    const dispatch = useDispatch();
    const currentRemainingQuantity = max - (quantity ?? 0);
    const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    useEffect(() => {
        if (!isBtnDisabled) {
            return;
        }

        const debounce = setTimeout(() => {
            setIsBtnDisabled(false);
        }, 300);

        return () => clearTimeout(debounce);
    }, [isBtnDisabled]);

    const handelAddToCart = () => {
        dispatch(addToCart(id));
        setIsBtnDisabled(true);
    };

    return (
        <div className={product}>
            <div className={productImg}>
                <img src={img} alt={title} />
            </div>
            <h2 title={title}>{title}</h2>
            <h3>{price.toFixed(2)} EGP</h3>
            <h3 className={maximumNotice}>{quantityReachedToMax ? 'you can reached to the limit' : `you can add ${currentRemainingQuantity}`}</h3>
            <Button
                variant="info"
                style={{ color: "white" }}
                onClick={handelAddToCart}
                disabled={isBtnDisabled || quantityReachedToMax}
            >
                {isBtnDisabled ? (
                    <>
                        <Spinner animation="border" size="sm" /> Loading...
                    </>
                ) : (
                    "Add to cart"
                )}
            </Button>
        </div>
    );
});

export default Product;
