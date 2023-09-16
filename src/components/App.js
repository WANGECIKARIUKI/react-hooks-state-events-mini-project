import React, {useState}from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDelete = (text) => {
    const updatedTasks = tasks.filter(task => task.text !== text);
    setTasks(updatedTasks);
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }

  const handleTaskSubmit = (newTask)
    const updatedTasks = [...tasks,newTask]
    setTasks(updatedTasks)
  

  const getFilteredTasks = () => {
    return selectedCategory === "All" 
      ? tasks 
      : tasks.filter(task => task.category === selectedCategory);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList />
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onSelectCategory={handleCategorySelect} 
      />
      <NewTaskForm categories={CATEGORIES.filter(category => category !== "All")} onTaskFormSubmit={handleTaskSubmit} 
      />
      <TaskList tasks={getFilteredTasks()} onDelete={handleDelete} />
    </div>
  );
}

export default App;
