import GlobalStyle from "./GlobalStyle"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import { UserContext } from "./context"
import SignInPage from "./Pages/SignInPage/SignInPage";

function App() {
  const [userData, setUserData] = useState()

  return (
    <UserContext.Provider value={{ userData, setUserData }} >
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;