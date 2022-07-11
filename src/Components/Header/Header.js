import { HeaderLeftMenu } from "./HeaderLeftMenu";
import { SearchBar } from "./SearchBar";
import "../../styles/Header/Header.css";

export const Header = () => {
  return (
    <header className="header">
      <HeaderLeftMenu />
      <SearchBar />
    </header>
  );
};
