import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, Row, Col, Button, Pagination, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import AddBook from "../../components/add-book";
import TopBar from "../../components/tob-bar";
import { fetchBooksAsync } from "../../store/book/actions";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isModalOpen, setModal] = useState(false);

  const { books, page, limit, total, fetchBooksLoading } = useSelector(
    (state) => state.book
  );

  useEffect(() => {
    dispatch(fetchBooksAsync(page, limit));
  }, []);
  const handlePaginationChange = (page) => {
    dispatch(fetchBooksAsync(page, limit));
  };

  const handleBookClick = (id) => {
    history.push(`/books/${id}/edit`);
  };

  if (fetchBooksLoading || !books) {
    return (
      <>
        <TopBar />
        <div
          style={{
            width: "100%",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin tip="Loadin books..." />
        </div>
      </>
    );
  }

  return (
    <>
      <TopBar />
      <div
        style={{
          marginTop: "20px",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <Button
            type="default"
            style={{ width: "100px" }}
            onClick={() => setModal(true)}
          >
            <PlusOutlined />
            Add
          </Button>
        </div>
        <>
          <Row gutter={16}>
            {books.map((book) => (
              <Col
                key={book._id}
                span={5}
                onClick={() => handleBookClick(book._id)}
              >
                <Card
                  hoverable
                  cover={
                    <img
                      src={`${process.env.REACT_APP_IMG_URL}/${book.img}`}
                      alt={book.name}
                    />
                  }
                >
                  <Card.Meta title={book.name} description={book.description} />
                </Card>
              </Col>
            ))}
          </Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            {total !== 0 && (
              <Pagination
                defaultCurrent={page}
                total={total}
                onChange={handlePaginationChange}
              />
            )}
          </div>
        </>

        <AddBook isOpen={isModalOpen} onClose={() => setModal(false)} />
      </div>
    </>
  );
};
export default Home;
