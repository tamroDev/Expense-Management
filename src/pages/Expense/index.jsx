import ScrollBar from "../../layouts/components/ScrollBar";
import ItemCategory from "../../components/ItemCategory";
import InputComponent from "../../components/InputComponent";

function Expense() {
  return (
    <div className="h-[100%]">
      <ScrollBar flex={"100%"}>
        <div className="w-full h-[99%] bg-white rounded-lg p-2">
          <h1 className="textTitle text-[30px] w-max m-auto uppercase border-b-2 mb-5">
            Spending settings
          </h1>
          <div className="flex flex-wrap gap-3 w-[50%] m-auto border-b-[4px] pb-8 mb-5">
            <ItemCategory
              nameCattegory={"House Fee"}
              src={
                "https://i.pinimg.com/564x/68/9f/b6/689fb69012103b73064a744d20e9c769.jpg"
              }
            />
            <ItemCategory
              nameCattegory={"House Fee"}
              src={
                "https://i.pinimg.com/564x/68/9f/b6/689fb69012103b73064a744d20e9c769.jpg"
              }
            />
            <ItemCategory
              nameCattegory={"House Fee"}
              src={
                "https://i.pinimg.com/564x/68/9f/b6/689fb69012103b73064a744d20e9c769.jpg"
              }
            />
            <ItemCategory
              nameCattegory={"House Fee"}
              src={
                "https://i.pinimg.com/564x/68/9f/b6/689fb69012103b73064a744d20e9c769.jpg"
              }
            />
            <ItemCategory
              nameCattegory={"House Fee"}
              src={
                "https://i.pinimg.com/564x/68/9f/b6/689fb69012103b73064a744d20e9c769.jpg"
              }
            />
            <ItemCategory
              nameCattegory={"House Fee"}
              src={
                "https://i.pinimg.com/564x/68/9f/b6/689fb69012103b73064a744d20e9c769.jpg"
              }
            />
            <ItemCategory
              nameCattegory={"More"}
              src={
                "https://i.pinimg.com/564x/fc/17/60/fc1760bddef7d9379ac830dd8e106b18.jpg"
              }
            />
          </div>
          <form
            action=""
            className="bg-white w-[50%] m-auto flex gap-3 flex-wrap"
          >
            <InputComponent des={"CCccccccccccccccccccccccc"} />
            <InputComponent />
            <InputComponent />
            <InputComponent />
            <InputComponent />
          </form>
        </div>
      </ScrollBar>
    </div>
  );
}

export default Expense;
