import { Route, Routes } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Tasks from "./container/Tasks/Tasks";
import AddTask from "./components/AddTask/AddTask";
import TaskDone from "./components/Taskdone/TaskDone";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import { useEffect, useState } from "react";
import axios from "axios";
const App = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    axios.get("/auth/login").then((res) => {
      // console.log(res);
      // console.log("fvvf");
      if (res.data) {
        setIsLogin(true);
      }
    });
  }, []);
  let routes = (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );

  if (isLogin) {
    routes = (
      <Routes>
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/taskdone" element={<TaskDone />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    );
  }

  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;
