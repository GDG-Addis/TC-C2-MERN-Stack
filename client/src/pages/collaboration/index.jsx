import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Editor from "../../components/editor";
import { Button, Spin } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";
import AddAuthor from "../../components/add-author";
import TopBar from "../../components/tob-bar";

import { fetchBookAsync } from "../../store/book/actions";

const Collaboration = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { book: bookObject, fetchBookLoading } = useSelector(
    (state) => state.book
  );
  const book = bookObject[params.id];
  const [isModalOpen, setModal] = useState(false);

  useEffect(() => {
    dispatch(fetchBookAsync(params.id));
  }, []);

  if (fetchBookLoading || !book) {
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
          <Spin tip="Loadin book..." />
        </div>
      </>
    );
  }

  return (
    <>
      <TopBar />
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <div
          style={{
            width: "700px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2>{book.name}</h2>
          <Button
            style={{ width: "200px", marginBottom: "10px" }}
            type="primary"
            onClick={() => setModal(true)}
          >
            <ShareAltOutlined />
            Share
          </Button>
        </div>
        <Editor id={params.id} />
        <AddAuthor
          isOpen={isModalOpen}
          onClose={() => setModal(false)}
          id={params.id}
        />
      </div>
    </>
  );
};
export default Collaboration;
