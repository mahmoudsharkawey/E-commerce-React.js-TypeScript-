import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { Container } from "react-bootstrap";
import Product from "@components/ecommerce/Products/Product";
import Loading from "@components/feedback/Loading/Loading";
import GridList from "@components/common/GridList/GridList";
import { TProduct } from "@customTypes/product";
import {
    actGetProductsByCatPrefix,
    productsCleanUp,
} from "@store/products/productsSlice";
import Heading from "@components/common/Heading/Heading";

const Products = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const { error, loading, records } = useAppSelector((state) => state.products);
    const cartItems = useAppSelector((state) => state.cart.items);

    const productsFullInfo = records.map((el) => ({
        ...el,
        quantity: cartItems[el.id] || 0,
    }));

    useEffect(() => {
        dispatch(actGetProductsByCatPrefix(params.prefix as string));
        return () => {
            dispatch(productsCleanUp());
        };
    }, [dispatch, params]);

    return (
        <Container>
            <Heading >
                <span className="text-capitalize">{params.prefix}</span> Products
            </Heading>
            <Loading status={loading} error={error}>
                <GridList<TProduct>
                    records={productsFullInfo}
                    renderItem={(record) => <Product {...record} />}
                />
            </Loading>
        </Container >
    );
};

export default Products;
