import { Box } from "@mui/material";
import Sidebar from "../components/Layouts/Sidebar";
import { Outlet } from "react-router-dom";
import TopBar from "src/components/Layouts/Topbar";
import Footer from "src/components/Layouts/Footer";
import { useState } from "react";

const AdminDashboard = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#EEEEEE",
        // overflowX: "hidden",
        overflowX: "auto",
        width: '100vw'
      }}
    >
      <TopBar setExpanded={setExpanded} />
      <TopBar setExpanded={setExpanded} />

      <Box sx={{ display: "flex", flexGrow: 1 }}>
      <Sidebar expanded={expanded} setExpanded={setExpanded} />

        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              flexGrow: 1,
              marginTop: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Outlet />
          </Box>

          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
