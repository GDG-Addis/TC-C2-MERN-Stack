import { Modal, Form, Typography, AutoComplete } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const AddAuthor = ({ isOpen, onClose, id }) => {
  const onSearch = (text) => {
    /**
     * TOD: Search User
     */
  };
  const onSelect = (email) => {
    /**
     * TOD: Add Author
     */
  };

  const handleRemove = (autId) => {
    /**
     * TOD: Remove Author
     */
  };
  return (
    <>
      <Modal title="Add Author" visible={isOpen} onCancel={onClose} footer={[]}>
        <Form>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input email!" }]}
          >
            <AutoComplete
              options={[]}
              onSelect={onSelect}
              onSearch={onSearch}
              placeholder="search user by email"
            />
          </Form.Item>
        </Form>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}
        >
          <Typography.Text>{`John Doe`}</Typography.Text>

          <CloseOutlined onClick={() => handleRemove(1)} />
        </div>
      </Modal>
    </>
  );
};

export default AddAuthor;
