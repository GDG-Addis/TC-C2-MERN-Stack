import { useRef, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { toolbarOptions } from "./options";
import "react-quill/dist/quill.snow.css";
import "./style.css";

import { updateBookAsync } from "../../store/book/actions";

const Editor = ({ id }) => {
  const dispatch = useDispatch();
  const { book: bookObject } = useSelector((state) => state.book);
  const book = bookObject[id];
  const ref = useRef();
  const [socket, setSocket] = useState();
  const [value, setValue] = useState(book.content);

  useEffect(() => {
    const s = io(process.env.REACT_APP_BASE_URL);
    setSocket(s);
    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const content = ref.current.getEditor().getContents();
      dispatch(updateBookAsync(id, { content }));
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.emit("join", id);
      socket.on("receive-change", (data) => {
        ref.current.getEditor().updateContents(data);
      });
    }
  }, [socket]);

  const handleChange = (content, delta, source, editor) => {
    if (source === "user") {
      socket.emit("send-change", delta);
    }
  };

  return (
    <ReactQuill
      ref={ref}
      theme="snow"
      defaultValue={value}
      onChange={handleChange}
      placeholder="Write something here"
      modules={{ toolbar: toolbarOptions }}
    />
  );
};
export default Editor;
