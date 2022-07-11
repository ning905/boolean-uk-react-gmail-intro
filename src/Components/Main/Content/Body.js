import flaticonWelcomeImage from "../../../assets/images/flaticon-welcome-image.png";
import "../../../styles/Main/Content/Body.css";

export const Body = () => {
  return (
    <section className="email-body">
      <div className="content">
        <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
      </div>
    </section>
  );
};
