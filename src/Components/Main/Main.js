import "../../styles/Main/Main.css";

import { ToolBar } from "./ToolBar";
import { Content } from "./Content/Content";

export const Main = () => {
  return (
    <main className="email-view">
      <ToolBar />
      <Content />
    </main>
  );
};
