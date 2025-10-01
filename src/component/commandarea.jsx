import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineLoading3Quarters, AiOutlineDatabase } from "react-icons/ai";
import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { sql } from "@codemirror/lang-sql";
import { format } from "sql-formatter";

const Editor = () => {
  const [run, setRun] = useState(false);
  const [content, setContent] = useState("");

  const handleRun = () => {
    const trimmed = content.replace("/s/g", "");
    if (trimmed.length === 0) {
      setRun(false);
    } else {
      setRun(true);
      // Simulate running (fake delay for now)
      setTimeout(() => {
        console.log("Running code:", content);
        setRun(false);
      }, 5000);
    }
  };

  return (
    <>
      <div className="">
        {/* Top bar */}
        <div className="flex text-white text-sm h-13 items-center bg-gray-700/40 rounded-t-lg">
          <div
            className="flex gap-3 items-center h-13 bg-gray-800 px-4 py-3 rounded-tl-lg cursor-pointer"
            onClick={handleRun}
          >
            {!run ? (
              <FaPlay className="text-green-400 text-sm" />
            ) : (
              <AiOutlineLoading3Quarters className="text-amber-600 text-sm animate-spin" />
            )}
            <p className="font-semibold ">Run</p>
          </div>
          <div className="flex gap-3 items-center h-13 px-4 py-3 bg-black cursor-pointer">
            <AiOutlineDatabase className="text-xl" />
            <p>SQLite (to be updated)</p>
          </div>
        </div>

        {/* Editor section */}
        <div className="">
          <CodeMirror
            value={content}
            placeholder={`-- Write your SQL SELECT * FROM users;`}
            height="300px"
            theme={oneDark}
            extensions={[sql()]}
            onChange={(value) => setContent(value)}
            className="w-auto text-sm scrollbar-thin"
            /* how can i remove the  focus or border line and round it edge*/
          />
        </div>
      </div>
    </>
  );
};

export default Editor;
