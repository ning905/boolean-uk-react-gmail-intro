import { Title } from "./Title";
import { Header } from "./Header";
import { Body } from "./Body";
import { Actions } from "./Actions";
import { Writing } from "./Writing/Writing";

export const Content = () => {
  return (
    <article className="email-content">
      <Title />
      <Header />
      <Body />
      <Actions />
      <Writing />
    </article>
  );
};
