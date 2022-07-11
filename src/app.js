import "./styles/app.css";

import { Header } from "./Components/Header/Header";
import { LeftMenu } from "./Components/LeftMenu/LeftMenu";
import { Main } from "./Components/Main/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Main />
    </div>
  );
}

export default App;
