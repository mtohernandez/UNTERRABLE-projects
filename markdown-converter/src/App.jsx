import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { insertMark, transform } from "./markdownSlice";
import { useEffect, useCallback } from "react";

const contentText = "w-100 h-75 mb-5 p-2 rounded border";

function App() {
  const { markdown, html } = useSelector((state) => state.markdown);
  const dispatch = useDispatch();

  const handleChangeText = (e) => {
    dispatch(insertMark(e.target.value));
  };

  const updateHTML = useCallback(() => {
    document.querySelector("#preview").innerHTML = "";
    document.querySelector("#preview").insertAdjacentHTML("afterbegin", html);
  }, [html]);

  useEffect(() => {
    updateHTML();
  });

  useEffect(() => {
    dispatch(transform());
    updateHTML();
  }, [dispatch, updateHTML]);

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-md-6 col-xs-12">
          <h3 className="fw-semibold p-2 mt-3 rounded" style={{backgroundColor: "black", color: "white"}}>Markdown Editor</h3>
          <textarea
            autoFocus
            id="editor"
            className={`${contentText} textarea-el`}
            value={markdown}
            onChange={handleChangeText}
          ></textarea>
        </div>
        <div className="col-md-6 col-xs-12">
          <h3 className="fw-semibold p-2 mt-3 rounded" style={{backgroundColor: "black", color: "white"}}>Preview</h3>
          <div id="preview" className={`${contentText} preview-el`}>
            {/* Adjacent HTML inserted */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
