import listSideBar from "./listSideBar";
import ItemSidebar from "./ItemSidebar";
import AccordionItem from "../../../components/Accordion";

function SideBar() {
  return (
    <div className="flex-[15%] h-[100vh] pt-[90px] shadow-2xl px-[15px] flex flex-col items-start">
      <div className="gap-3">
        {listSideBar.map((item) => (
          <ItemSidebar
            key={item.id}
            title={item.title}
            icon={item.icon}
            path={item.path}
          />
        ))}
        <AccordionItem path={"#"} icon={"fa-solid fa-gear"} title={"More"} />
      </div>
    </div>
  );
}

export default SideBar;
