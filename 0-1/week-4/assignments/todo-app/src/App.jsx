import { useState } from "react";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  let globalId = 0;

  function markAsDone(id) {
    console.log("id", id);
    const todo = document.getElementById(id);
    const btn = todo.children[2];
    console.log(btn.innerText);
    btn.innerText =
      btn.innerText == "Mark as done" ? "done!" : "Mark as done";
  }

  function addDiv(text, id) {
    if (!text) {
      const div = document.createElement("div");
      div.setAttribute("id", id);
      return div;
    }
    const div = document.createElement("div");
    div.innerText = text;
    return div;
  }

  function addTodo() {
    const title = document.getElementById("title");
    console.log(title)
    const desc = document.getElementById("description");
    const currentId = ++globalId;
    const parentDiv = addDiv(0, currentId);
    parentDiv.setAttribute("class", "todo-container");
    const btn = document.createElement("button");
    btn.setAttribute("class", "btn");
    btn.innerHTML = "Mark as done";
    btn.addEventListener("click", () => markAsDone(currentId));
    parentDiv.append(addDiv(title.value), addDiv(desc.value), btn);

    const todoDiv = document.getElementById("todo");
    todoDiv.append(parentDiv);
    title.value = ""
    desc.value = ""

  }

  return (
    // #1a202c
    <>
      <div className="flex  items-center flex-col bg-[#1a202c]  min-h-screen">
        <div className="mt-12 text-white">
          <h2 className="text-5xl font-mono text-orange-600  text-center p-8 font-semibold">
            Todo app
          </h2>

          <input
            className="p-2 mx-2 border bg-gray-800 border-orange-600  rounded-md"
            type="text"
            placeholder="Title"
            id="title"
          />

          <input
            className="p-2 mx-2 border bg-gray-800 border-orange-600  rounded-md"
            type="text"
            placeholder="Description"
            id="description"
          />
          <button className="btn" onClick={addTodo}>
            Submit
          </button>
        </div>
        <div id="todo" className=" mt-14 p-4 text-white w-6/12">
          
        </div>
      </div>
    </>
  );
}

export default App;
