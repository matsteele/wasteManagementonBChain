import React from "react";

import LogIn from "./components/log_in";
import WorkerHome from "./components/woker_interface";

const routes = {
  "/": () => <LogIn />,
  "/workerhome": () => <WorkerHome />
};

export default routes;
