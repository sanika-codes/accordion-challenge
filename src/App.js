
import AccordionItem from "./AccordionItem.jsx";
const data = [
  {
    heading: "Section 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    heading: "Section 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    heading: "Section 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
export default function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ul style={{ width: "50%" }}>
        {data.map((item) => {
          return (
            <AccordionItem
              key={item.heading}
              heading={item.heading}
              content={item.content}
            />
          );
        })}
      </ul>
    </div>
  );
}

