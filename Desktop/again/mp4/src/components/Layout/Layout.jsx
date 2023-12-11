import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Router from "../../routers/Routers";
import NavbarTop from "../Header/NavbarTop";
import AdminNav from "../../admin/AdminNav";
import { useLocation } from "react-router-dom";
import { ChatAiWidget } from "@sendbird/chat-ai-widget";
import "@sendbird/chat-ai-widget/dist/style.css";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.startsWith("/dashboard") ? (
        <>
          <AdminNav />
          <div>
            <Router></Router>
          </div>
        </>
      ) : (
        <>
          <NavbarTop />
          <Header />
          <ChatAiWidget
            applicationId="18446FCD-25C5-4E69-BEFD-EF6221DAB3C9" // Your Sendbird Application ID
            botId="trendsph-support" // Your Bot ID
          />
          <div>
            <Router></Router>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
