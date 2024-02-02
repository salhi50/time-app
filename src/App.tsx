import * as React from "react";
import {HashRouter, Routes, Route, BrowserRouter, useNavigate} from "react-router-dom";
import { calendarSegment, stopwatchSegment, worldClockSegment } from "./constants";
import Root from "./pages/Root";

const WorldClock = React.lazy(() => import("./pages/WorldClock"));
const Calendar = React.lazy(() => import("./pages/Calendar"));
const Stopwatch = React.lazy(() => import("./pages/Stopwatch"));
const basePage = `/${stopwatchSegment}`;
const Redirect = () => {
  const navigate = useNavigate();
  React.useEffect(() => void navigate(basePage) ,[]);
  return null;
}

let Router = BrowserRouter;

if(process.env.NODE_ENV === "production") {
  Router = HashRouter;
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Redirect />} />
          <Route path={worldClockSegment} element={<WorldClock />} />
          <Route path={calendarSegment} element={<Calendar />} />
          <Route path={stopwatchSegment} element={<Stopwatch />} />
          <Route path="*" element={<Redirect />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;