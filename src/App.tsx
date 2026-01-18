import { useState } from "react";

import "./App.css";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";

function App() {
  const [task, setTask] = useState(``);
  const [taskAdded, setTaskAdded] = useState(false);
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [allTaskNumber, setAllTaskNumber] = useState(0);
  const [activeTaskNumber, setActiveTaskNumber] = useState(0);
  const [completedTaskNumber, setCompletedTaskNumber] = useState(0);

  const handleTaskAdd = () => {
    setTaskAdded(true);
    setActiveTaskNumber(allTaskNumber + 1);
    console.log(task);
    console.log(allTaskNumber);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-white w-94.25 px-4 py-6 flex flex-col gap-10 shadow-[0_12px_24px_rgba(0,0,0,0.16)] rounded-md">
          <div className="flex flex-col gap-8">
            <div aria-label="Main contents" className="flex flex-col gap-5">
              {" "}
              <h1 className="text-[20px] font-bold">To-Do list</h1>
              <div
                aria-label="Input textarea and add button"
                className="flex gap-1.5"
              >
                <Input
                  className=" focus-visible:ring-[#2463EB]"
                  //Further master this "focus" thing//
                  placeholder="Add a new task..."
                  onChange={(e) => setTask(e.target.value)}
                />
                <Button
                  onClick={handleTaskAdd}
                  className="bg-[#3c82f6] cursor-pointer "
                >
                  Add
                </Button>
              </div>
              <div aria-label="buttons" className="flex self-start gap-1.5">
                <Button
                  className={`hover:opacity-75 cursor-pointer ${
                    all
                      ? `bg-[#3c82f6] text-white`
                      : `bg-[#f3f4f6] text-[#363636]`
                  }`}
                  onClick={() => {
                    setActive(false);
                    setCompleted(false);
                    setAll(true);
                  }}
                >
                  All
                </Button>
                <Button
                  className={`${
                    active
                      ? `bg-[#3c82f6] text-white`
                      : `bg-[#f3f4f6] text-[#363636]`
                  } 
hover:opacity-75 cursor-pointer 

                  `}
                  onClick={() => {
                    setCompleted(false);
                    setAll(false);
                    setActive(true);
                  }}
                >
                  Active
                </Button>
                <Button
                  className={`${
                    completed
                      ? `bg-[#3c82f6] text-white`
                      : `bg-[#f3f4f6] text-[#363636]`
                  } hover:opacity-75 cursor-pointer`}
                  onClick={() => {
                    setActive(false);
                    setAll(false);
                    setCompleted(true);
                  }}
                >
                  Completed
                </Button>
              </div>
              <div aria-label="Displays tasks" className="flex flex-col gap-5">
                {taskAdded ? (
                  <div>
                    {" "}
                    <div
                      aria-label="Dummy task container"
                      className="p-4 bg-[#F9FAFB] h-15.5 w-86.26 items-center  justify-between flex"
                    >
                      <div className="flex gap-2.5">
                        {" "}
                        <Checkbox />
                        {task}
                      </div>
                      <Button
                        variant="destructive"
                        className="bg-[#FEF2F2] text-[#EF4444] text-[14px] font-medium cursor-pointer"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ) : (
                  ``
                )}
              </div>
            </div>
            <p className="text-[#6b7280] text-[14px]">
              No tasks yet. Add one above!
            </p>
          </div>
          <p aria-label="Footer note " className="text-[#6b7280] text-[12px]">
            {" "}
            Powered By <span className="text-[#3b73ed]"> Pinecone academy</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
