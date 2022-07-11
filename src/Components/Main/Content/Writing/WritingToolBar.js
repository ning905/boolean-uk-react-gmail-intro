import "../../../../styles/Main/Content/Writing/WritingToolBar.css";
import downArrow from "../../../../assets/icons/down-arrow.svg";
import solidA from "../../../../assets/icons/a-solid.svg";
import paperClip from "../../../../assets/icons/paperclip-solid.svg";

export const WritingToolBar = () => {
  return (
    <div className="writing-toolbar-container">
      <div className="send-button-container">
        <div className="send-button">send</div>
        <img className="icon" src={downArrow} alt="send" />
      </div>
      <div className="left-icon-wrap">
        <img className="icon" src={solidA} alt="" />
        <img className="icon" src={paperClip} alt="" />
        <img className="icon" src={paperClip} alt="" />
        <img className="icon" src={paperClip} alt="" />
        <img className="icon" src={paperClip} alt="" />
        <img className="icon" src={paperClip} alt="" />
        <img className="icon" src={paperClip} alt="" />
        <img className="icon" src={paperClip} alt="" />
      </div>
      <div className="right-icon-wrap">
        <img className="icon" src={paperClip} alt="" />
        <img className="icon" src={paperClip} alt="" />
      </div>
    </div>
  );
};
