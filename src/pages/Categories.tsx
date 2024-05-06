import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import Category from "@components/ecommerce/Category/Category";
import actGetCategories from "@store/caregories/act/actGetCategories";
import { Container, Row, Col } from "react-bootstrap";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  const categoriesList =
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={3}
            key={record.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Category {...record} />
          </Col>
        ))
      : "there are no categories";

  return (
    <Container>
      <Row>{categoriesList}</Row>
    </Container>
  );
};

export default Categories;