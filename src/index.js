import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Book from "./components/book/book";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./tests/reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/book" element={<Book />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
