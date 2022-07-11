import "../../styles/LeftMenu/LeftMenu.css";
import { InboxList } from "./Inbox";

export const LeftMenu = () => {
  return (
    <nav className="left-menu">
      <InboxList />
    </nav>
  );
};
