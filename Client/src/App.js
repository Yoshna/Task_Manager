import { Route, Routes } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Tasks from "./container/Tasks/Tasks";
import AddTask from "./components/AddTask/AddTask";
import TaskDone from "./components/TaskDone/TaskDone";
const App = (props) => {
  const routes = (
    <Routes>
      <Route path="/addtask" element={<AddTask />} />
      <Route path="/taskdone" element={<TaskDone />} />
      <Route path="/" element={<Tasks />} />
    </Routes>
  );

  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;
