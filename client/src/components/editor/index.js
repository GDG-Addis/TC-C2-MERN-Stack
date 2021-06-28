import { useRef } from "react";
import ReactQuill from "react-quill";
import { toolbarOptions } from "./options";
import "react-quill/dist/quill.snow.css";
import "./style.css";

const Editor = ({ id }) => {
  const ref = useRef();

  const handleChange = (content, delta, source, editor) => {
    if (source === "user") {
      /**
       * TODO: Emit Change
       */
    }
  };

  return (
    <ReactQuill
      ref={ref}
      theme="snow"
      defaultValue={""}
      onChange={handleChange}
      placeholder="Write something here"
      modules={{ toolbar: toolbarOptions }}
    />
  );
};
export default Editor;
