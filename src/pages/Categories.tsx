import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import Category from "@components/ecommerce/Category/Category";
import actGetCategories from "@store/caregories/act/actGetCategories";
import { Container } from "react-bootstrap";
import Loading from "@components/feedback/Loading/Loading";
import GridList from "@components/common/GridList/GridList"
import { TCategory } from "@customTypes/category";
import Heading from "@components/common/Heading/Heading";

const Categories = () => {
    const dispatch = useAppDispatch();
    const { error, loading, records } = useAppSelector((state) => state.categories);

    useEffect(() => {
        if (!records.length) {
            dispatch(actGetCategories());
        }
    }, [dispatch, records]);
    return (
        <Container>
            <Heading>Categories</Heading>
            <Loading status={loading} error={error}>

                <GridList<TCategory>
                    records={records}
                    renderItem={(record) => <Category {...record} />}
                />
            </Loading>
        </Container>
    );
};

export default Categories;
