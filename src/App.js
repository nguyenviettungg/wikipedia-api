import React from "react";
// import Accordion from "./components/accordion.component";
import Search from "./components/search.component";

const items = [
  {
    title: "what is React ?",
    content: "react is a front end js framework",
  },
  {
    title: "why use react?",
    content: "react is a favorite js lib among engineers",
  },
  {
    title: "how do you use React?",
    content: "you use react by creating components",
  },
];

export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};
