import { useState } from "react";
import listSideBar from "./listSideBar";

import ItemSidebar from "./ItemSidebar";
import AccordionItem from "../../../components/Accordion";

function SideBar() {
  const [items, setItems] = useState(listSideBar);

  const handleLinkClick = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id
        ? { ...item, currently: true }
        : { ...item, currently: false }
    );
    setItems(updatedItems);
  };

  return (
    <div className="flex-[15%] h-[100vh] pt-[90px] shadow-2xl px-[15px] flex flex-col items-start">
      <div className="gap-3">
        {items.map((item) => (
          <ItemSidebar
            key={item.id}
            id={item.id}
            title={item.title}
            currently={item.currently}
            icon={item.icon}
            path={item.path}
            setCurrent={handleLinkClick}
          />
        ))}
        <AccordionItem
          path={"#"}
          setCurrent={handleLinkClick}
          icon={"fa-solid fa-gear"}
          title={"More"}
        />
      </div>
    </div>
  );
}

export default SideBar;
