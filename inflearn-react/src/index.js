import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import MovePractice from "./MovePractice";
import ClickMove from "./ClickMove";
import DataPractice from "./DataPractice";
import ComponentList from "./ComponentList";
import EventLogin from "./EventLogin";
import LikeInOut from "./LikeInOut";
import HookUseState from "./HookUseState";
import ComponentPractice from "./ComponentPractice";
import DateView from "./DateView";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<MovePractice />);
