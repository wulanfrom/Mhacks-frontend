import React from "react";
import MDEditor from "@uiw/react-md-editor";

export default function MarkdownEditor() {
  const [value, setValue] = React.useState("Write your notes here.");
  return (
    <div>
      <MDEditor value={value} onChange={setValue} />
    </div>
  );
}
