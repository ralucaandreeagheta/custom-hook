import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AppHeader from "./components/AppHeader";
import Dashboard from "./components/Dashboard";
import Input from "./components/Input";
import Login from "./components/Login";
import MultipliedByTwo from "./components/MultipliedByTwo";
import Tweet from "./components/Tweet";

export default function App() {

  const [inputValue, setInputValue] = useState(0);

  return (
    <>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tweet/:tweetId" element={<Tweet />} />
        </Routes>
      </BrowserRouter>

      <h1>Multiplied by Two App</h1>
      <Input setInputValue={setInputValue} />
      <MultipliedByTwo inputValue={inputValue} />
    </>
  );
}