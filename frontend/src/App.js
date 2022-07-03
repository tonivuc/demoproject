import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LunchWishes from "./pages/lunchWishes";
import ReceiptUpload from "./pages/receiptUpload";

import PageFrame from "./components/pageFrame";
import ContentFrame from "./components/contentFrame";
import AuthProvider from "./components/authProvider";
import ProtectedRoute from "./components/protectedRoute";

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
                  <h2>Please login</h2>
                </ContentFrame>
              }
            />
            <Route
              path="lunch-wishes"
              element={
                <ProtectedRoute>
                  <ContentFrame pageTitle="Lunch wishes">
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
