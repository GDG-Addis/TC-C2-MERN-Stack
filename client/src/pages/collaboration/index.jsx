import { useState } from "react";
import Editor from "../../components/editor";
import { Button } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";
import AddAuthor from "../../components/add-author";
import TopBar from "../../components/tob-bar";

const Collaboration = () => {
  const [isModalOpen, setModal] = useState(false);

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
          <h2>You don't know JS</h2>
          <Button
            style={{ width: "200px", marginBottom: "10px" }}
            type="primary"
            onClick={() => setModal(true)}
          >
            <ShareAltOutlined />
            Share
          </Button>
        </div>
        <Editor id={1} />
        <AddAuthor
          isOpen={isModalOpen}
          onClose={() => setModal(false)}
          id={1}
        />
      </div>
    </>
  );
};
export default Collaboration;
