import { IoChatbubbles } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { FaDatabase } from "react-icons/fa6";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "./modal";
import { produce } from "immer";
import { globalContext } from "../App";

const Sidenav = () => {
  const { showSidenav } = useContext(globalContext);
  const [dboptions, setDBoptions] = useState([
    {
      id: uuidv4(),
      name: "Sqlite3",
      showTables: false,
      listTables: [
        {
          id: uuidv4(),
          name: "Booking",
          columns: ["id", "user_id", "status", "start_date", "end_date"],
          showColumn: false,
        },
        {
          id: uuidv4(),
          name: "Property",
          columns: ["property_id", "property_name", "Location", "price"],
          showColumn: false,
        },
        {
          id: uuidv4(),
          name: "Review",
          columns: ["review_id", "user_id", "property_id", "rating", "comment"],
          showColumn: false,
        },
      ],
    },
    {
      id: uuidv4(),
      name: "MariaDB",
      showTables: false,
      listTables: [],
    },
  ]);

  const [modal, setModal] = useState([
    {
      id: uuidv4(),
      name: "price",
      showModal: false,
      details: `This is Free for now and a demo ,
                the actual website is in <a href = "https://sqliteonline.com/" target="_blank" class="text-2xl text-blue-700 underline"> SQL</a> `,
    },
    {
      id: uuidv4(),
      name: "help",
      showModal: false,
      details: `Still under development`,
    },
    {
      id: uuidv4(),
      name: "Ask AI",
      showModal: false,
      details: `This is Free for now and a demo ,
                the actual website is in <a href = "https://sqliteonline.com/" target="_blank" class="text-2xl text-blue-700 underline"> SQL</a> `,
    },
  ]);

  const toggleModal = (id) => {
    /* 
    this function is used to change the state of modal
    either displays or closes it 
    */
    setModal((prev) =>
      produce(prev, (draft) => {
        const obj = draft.find((d) => d.id === id);
        if (obj) {
          obj.showModal = !obj.showModal;
        }
      })
    );
  };

  // Toggle DB tables
  const showDBTables = (id) => {
    setDBoptions((prev) =>
      prev.map((db) =>
        db.id === id ? { ...db, showTables: !db.showTables } : db
      )
    );
  };

  // Toggle table columns
  const showTBcol = (db_id, table_id) => {
    setDBoptions((prev) =>
      prev.map((db) =>
        db.id === db_id
          ? {
              ...db,
              listTables: db.listTables.map((TB) =>
                TB.id === table_id ? { ...TB, showColumn: !TB.showColumn } : TB
              ),
            }
          : db
      )
    );
  };

  return (
    <div
      className={`h-full transition-all ease-in-out  duration-500 ${
        showSidenav ? "flex w-1/5   flex-col" : "w-0 overflow-hidden"
      }   bg-black text-white/85 text-sm space-y-4`}
    >
      {modal[0].showModal ? (
        <Modal modal={modal[0]} toggleModal={toggleModal} />
      ) : null}
      {modal[1].showModal ? (
        <Modal modal={modal[1]} toggleModal={toggleModal} />
      ) : null}
      {/* Header */}
      <div className="flex gap-4 justify-between h-12 items-center w-full">
        <div className="w-7/9 flex gap-3 px-2 bg-gray_light/30 h-12 items-center justify-between rounded-ee-lg">
          <p
            className="hover:bg-text_color/70 py-1 px-3 rounded-lg cursor-pointer"
            onClick={() => {
              toggleModal(modal[0].id);
            }}
          >
            Pricing
          </p>
          <p
            className=" hover:bg-text_color/70 py-1 px-3 rounded-lg cursor-pointer"
            onClick={() => {
              toggleModal(modal[1].id);
            }}
          >
            Help
          </p>
          <label className="relative hover:bg-text_color/70 py-2 px-2 rounded-lg cursor-pointer">
            <span className="group relative inline-flex">
              {" "}
              <IoChatbubbles />
              <span class="absolute top-8 left-1/2 -translate-x-1/2 bg-gray_light w-15 text-center text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-80 transition-opacity delay-500 duration-300">
                Ask AI
              </span>{" "}
            </span>
          </label>
        </div>
        <div className="flex items-center justify-center rounded-b-lg w-2/9 bg-gray_light/30 h-12">
          <input
            id="fileinput"
            className="hidden"
            type="file"
            accept=".sql,.dump,.sqlite,.sqlite3,.db,.db3"
          />

          <label
            htmlFor="fileinput"
            className="relative group  hover:bg-text_color/70 py-2 px-2 rounded-lg cursor-pointer"
          >
            <FaDatabase className="text-sm" />{" "}
            <span className="absolute  top-10 -left-8 w-20 bg-gray_light text-center rounded group-hover:opacity-80 opacity-0 transition-opacity delay-500 duration-300">
              {" "}
              import DB
            </span>
          </label>
        </div>
      </div>

      {/* Private DB Card */}
      <div className="bg-gray_light/30 rounded-r-lg h-24 px-4 space-y-2">
        <div className="w-max mx-auto">
          <p className="text-center rounded-b-lg text-sm py-1 bg-bg_black w-44">
            Private DB +
          </p>
        </div>
        <p className="text-sm">Create a database linked to your account.</p>
      </div>

      {/* Database Explorer */}
      <div className="bg-gray_light/30 rounded-r-lg px-4 space-y-2 flex-1 overflow-y-auto scrollbar-thin">
        <div className="w-max mx-auto">
          <p className="text-center rounded-b-lg text-sm py-1 bg-bg_black w-44">
            Demo
          </p>
        </div>
        <ul className="flex flex-col space-y-2">
          {dboptions.map((db) => (
            <li
              key={db.id}
              className={`${
                db.showTables ? "flex-1 border-l border-text_color" : ""
              }`}
            >
              <div
                className="flex justify-between h-5 items-center cursor-pointer pl-2 mb-2"
                onClick={() => showDBTables(db.id)}
              >
                <p>{db.name}</p>
                <IoIosArrowBack
                  className={`transition-transform ${
                    db.showTables ? "rotate-90" : "rotate-0"
                  }`}
                />
              </div>

              {/* Tables */}
              <div className={`${db.showTables ? "block pl-6" : "hidden"}`}>
                <ul className="space-y-4">
                  <p className="font-bold uppercase">Tables</p>
                  {db.listTables.length > 0 ? (
                    db.listTables.map((table) => (
                      <li key={table.id} className="text-sm text-white pl-4">
                        <div
                          className="flex justify-between cursor-pointer"
                          onClick={() => showTBcol(db.id, table.id)}
                        >
                          <p className="text-text_color font-bold">
                            {table.name}
                          </p>
                          <IoIosArrowBack
                            className={`transition-transform ${
                              table.showColumn ? "rotate-90" : "rotate-0"
                            }`}
                          />
                        </div>
                        {table.showColumn && (
                          <ul className="space-y-1">
                            {table.columns.map((column) => (
                              <li key={column} className="pl-5 text-gray-400">
                                {column}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))
                  ) : (
                    <p>click to connect</p>
                  )}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
