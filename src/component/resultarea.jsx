import { useContext, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { globalContext } from "../App";

const Resultarea = () => {
  const { showSidenav, setShowSidenav } = useContext(globalContext);
  //const [showSidenav, setShowSidenav] = useState(false);
  console.log(showSidenav);
  const [columns, setColumns] = useState([
    "id",
    "First name",
    "Last Name",
    "Age",
    "URL",
  ]);

  const [rows, setRows] = useState([
    [1, "Lawal", "Sulaimon", 25, "http://"],
    [
      2,
      "Olayiwola",
      "aishadabdalbhblbasfvblasdbldsafhvbhfbdvubdvldsbdhbdbdl",
      20,
      "http://",
    ],
    [3, "Ben", "Seeda", 56, "http://"],
    [4, "Abdullah", "Lukman", 28, "http://"],
    [2, "Olayiwola", "aisha", 20, "http://"],
    [3, "Ben", "Seeda", 56, "http://"],
    [4, "Abdullah", "Lukman", 28, "http://"],
    [3, "Ben", "Seeda", 56, "http://"],
    [4, "Abdullah", "Lukman", 28, "http://"],
  ]);

  return (
    <div className="">
      {" "}
      <div className=" mt-2 max-h-60 overflow-auto scrollbar-thin rounded-b-lg">
        <table className="table-auto w-full border-collapse text-xs overflow-y-auto ">
          <thead className="sticky top-0 bg-bg_black text-white text-xs">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-4 py-2 text-left border-r border-gray_light "
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows
              ? rows.map((row, index) => {
                  return (
                    <tr
                      key={index}
                      className={`  ${
                        index % 2 === 1 ? "bg-gray_light" : "bg-gray_light/30"
                      }`}
                    >
                      {row.map((content) => {
                        return (
                          <td
                            className={`px-4 py-2 text-left truncate max-w-15 
    ${typeof content === "number" ? "text-amber-300 " : "text-gray-300"}`}
                          >
                            {content}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
      <div className="flex text-gray_light justify-end gap-3 mt-1 items-center">
        <p>
          <FaDownload className="hover:text-text_color" />
        </p>
        <p
          className=""
          onClick={() => {
            setShowSidenav(!showSidenav);
          }}
        >
          <FaRegArrowAltCircleRight
            className={`${
              showSidenav ? "rotate-180" : "rotate-0"
            } hover:text-text_color text-lg`}
          />
        </p>
      </div>
    </div>
  );
};

export default Resultarea;
