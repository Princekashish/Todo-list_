"use client";
import React, { useState } from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { MdDelete } from "react-icons/md";

function page() {
  const [task, settask] = useState("");
  const [Desc, setDesc] = useState("");
  const [add, setDadd] = useState([]);

  const submitHandelar = (e) => {
    e.preventDefault();
    // console.log(task);
    // console.log(Desc);
    setDadd([...add, { task, Desc }]);
    settask("");
    setDesc("");
    console.log(add);
  };
  const deleteHandler = (i) => {
    let copyarray = [...add];
    copyarray.splice(i, 1);
    setDadd(copyarray);
  };

  let rander = <h1 className=" text-rose-500">*No dask assign </h1>;

  if (add.length > 0) {
    rander = add.map((x, i) => {
      return (
        <li
          key={i}
          className="bg-gray-100 text-black min-w-[560px] flex rounded-md mt-4"
        >
          <div className=" flex justify-between w-full items-center gap-8">
            <div className="flex m-3 gap-4">
              <input type="checkbox" />
              <h5 className="font-semibold text-xl ">{x.task}</h5>
            </div>
            <h6 className="font-base text-lg">{x.Desc}</h6>
            <MdDelete
              onClick={() => {
                deleteHandler(i);
              }}
              size={25}
              className="flex justify-end hover:shadow-orange-400 cursor-pointer items-end"
            />
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <div className="bg-black flex flex-col  items-center justify-center h-screen  p-5 shadow-xl">
        <h1 className="text-2xl font-semibold  text-white">My Todo List</h1>
        <div className=" rounded flex justify-center m-3  ">
          <form onSubmit={submitHandelar}>
            <input
              type="text"
              placeholder="Task "
              className="border-2 border-white h-10 text-lg w-64 rounded "
              value={task}
              onChange={(e) => {
                settask(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Desciption"
              className="border-2 ml-5 border-white h-10 w-64 text-lg rounded text-black "
              value={Desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
            <button className="bg-orange-400 px-9  text-white hover:bg-orange-600 font-semibold rounded-lg ml-4 py-2">
              Add
            </button>
          </form>
        </div>
        <div className="  flex justify-around">
          <ul>
            <li className="">{rander}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default page;
