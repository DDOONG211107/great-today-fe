import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer"; // Drawer 컴포넌트 추가
import RouterConfig from "./router/Router";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
      <Header openDrawer={toggleDrawer} />
      {drawerOpen && <Drawer toggleDrawer={toggleDrawer} />}
      <RouterConfig />
    </Router>
  );
}

export default App;
