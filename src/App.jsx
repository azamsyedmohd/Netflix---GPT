import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/browse" element={<Browse />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
