import "../../../../styles/Main/Content/Writing/WritingArea.css";
import backArrow from "../../../../assets/icons/back-arrow.png";
import downArrow from "../../../../assets/icons/down-arrow.svg";
import ellipsis from "../../../../assets/icons/ellipsis-solid.svg";
import share from "../../../../assets/icons/share.svg";
import { WritingToolBar } from "./WritingToolBar";

export const WritingArea = () => {
  return (
    <div className="writing-area">
      <header>
        <img className="icon" src={backArrow} alt="reply button" />
        <img className="icon" src={downArrow} alt="more actions" />
        <p>Freepik Company (no-reply@freepik.com)</p>
        <img className="icon" src={share} alt="share" />
      </header>

      <div className="text-area"></div>

      <div>
        <img className="icon" src={ellipsis} />
      </div>

      <WritingToolBar />
    </div>
  );
};
