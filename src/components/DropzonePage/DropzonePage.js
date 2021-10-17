import React, { useState, useEffect } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

// the code was inspired by https://stackblitz.com/edit/drag-and-drop-file-upload-react?file=src%2FApp.js

// preview component
const Preview = ({ meta }) => {
  const { name, percent, status, previewUrl } = meta;
  return (
    <div className="preview-box">
      <img src={previewUrl} alt="initial" />{" "}
      <span className="name">{name}</span> -{" "}
      <span className="status">{status}</span>
      {status !== "done" && (
        <span className="percent">&nbsp;({Math.round(percent)}%)</span>
      )}
    </div>
  );
};

function DropzonePage(props) {
  // const [droppedFiles, updateFiles] = useState([]);
  // specify upload params and API url to file upload
  const getUploadParams = ({ file }) => {
    const body = new FormData();
    body.append("dataFiles", file);
    return { url: "http://localhost:4000/uploadmultifile", body };
  };

  // handle the status of the file upload
  const handleChangeStatus = ({ xhr }) => {
    if (xhr) {
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          const result = JSON.parse(xhr.response);
          console.log(result);
        }
      };
    }
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files) => {
    props.updateAllFiles([...files]);

    // send files to the learning materials

    //clear the dropzone
    files.forEach((f) => f.remove());
  };

  useEffect(() => {
    // console.log("droppedFiles: ", droppedFiles);
  }, [props]);

  return (
    <div className="App">
      <div>
        <Dropzone
          // getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          maxFiles={1}
          inputContent={
            <div>
              <FontAwesomeIcon
                className="customIcon"
                style={{
                  color: "#14bf96",
                  fontSize: "50px",
                  margin: "10px 140px"
                }}
                icon={faCloudUploadAlt}
              />
              <p className="dropText">Drag and Drop or Browse Files</p>
            </div>
          }
          styles={{
            dropzone: {
              overflow: "auto",
              border: "1px solid #c4c4c4"
            },
            inputLabelWithFiles: { margin: "20px 3%" }
          }}
          // canRemove={false}
          PreviewComponent={Preview}
          // accept="image/*,audio/*,video/*"
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default DropzonePage;
