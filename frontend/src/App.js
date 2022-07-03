import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LunchWishes from "./pages/lunchWishes";
import ReceiptUpload from "./pages/receiptUpload";

import PageFrame from "./components/pageFrame";
import ContentFrame from "./components/contentFrame";
import AuthProvider from "./components/authProvider";
import ProtectedRoute from "./components/protectedRoute";
import Login from "./pages/login";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageFrame />}>
            <Route
              index
              element={
                <ContentFrame pageTitle="Login">
                  <Login className="container-sm" />
                </ContentFrame>
              }
            />
            <Route
              path="tasks"
              element={
                <ProtectedRoute>
                  <ContentFrame pageTitle="To-do list">
                    <LunchWishes />
                  </ContentFrame>
                </ProtectedRoute>
              }
            />
            <Route path="receipt-upload" element={<ReceiptUpload />} />
          </Route>

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
