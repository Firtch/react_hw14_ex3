import React from "react";
import "./App.css";
import { TodoStore } from "./TodoStore";
import { TodoList } from "./TodoList";

function App() {
  return (
    <div className="App">
      <center>
      <TodoList todoStore={TodoStore} />
      </center>
    </div>
  );
}

export default App;
