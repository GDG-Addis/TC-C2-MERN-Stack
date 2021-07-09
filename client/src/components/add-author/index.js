import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, Typography, AutoComplete } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import { searchUsersAsync } from "../../store/user/action";
import { updateBookAsync } from "../../store/book/actions";

const AddAuthor = ({ isOpen, onClose, id }) => {
  const dispatch = useDispatch();
  const { book: bookObject } = useSelector((state) => state.book);
  const book = bookObject[id];
  const bookAuthor = book.authors.map((author) => author._id);
  const { users } = useSelector((state) => state.user);

  const onSearch = (text) => {
    dispatch(searchUsersAsync(text));
  };
  const onSelect = (email) => {
    const user = users.find((user) => user.email == email);
    dispatch(
      updateBookAsync(id, {
        authors: [user._id, ...book.authors],
      })
    );
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
              options={users
                ?.filter((user) => !bookAuthor.includes(user._id))
                .map((user) => ({
                  value: user.email,
                }))}
              onSelect={onSelect}
              onSearch={onSearch}
              placeholder="search user by email"
            />
          </Form.Item>
        </Form>

        {book.authors.map((author) => (
          <div
            key={author._id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "5px",
            }}
          >
            <Typography.Text>{`${author.firstName} ${author.lastName}`}</Typography.Text>

            <CloseOutlined onClick={() => handleRemove(1)} />
          </div>
        ))}
      </Modal>
    </>
  );
};

export default AddAuthor;
