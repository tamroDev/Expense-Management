import TableHome from "../../../../components/TableSpending";
import TableSavingsFunds from "../../../../components/TableSavingsFunds";
import ItemRenuve from "../ItemRevenu/ItemRenevu";

const data = [
  {
    id: 1,
    name: "House fee",
    month: 1,
    money: "7.000.0 $",
    path: "/",
  },
  {
    id: 2,
    name: "House fee",
    month: 1,
    money: "7.000.0 $",
    path: "/",
  },
];

function OverviewHome() {
  return (
    <div className={"w-full"}>
      <div className="flex gap-2">
        <ItemRenuve />
        <ItemRenuve />
        <ItemRenuve />
      </div>
      <div className="bg-white w-full h-max mb-[20px] rounded-lg shadow-lg p-4">
        <h1 className="font-[700] uppercase textTitle text-[20px] text-black!tracking-[3px] mb-4 pb-2 w-max">
          Installed Spend:
        </h1>
        <div className="">
          <TableHome data={data} />
          <h1 className="text-[20px] uppercase p-3 font-[700] textTitle text-red-500">
            Total: 7.000.0 $
          </h1>
        </div>
      </div>
      <div className="bg-white w-full h-max mb-[20px] rounded-lg shadow-lg p-4">
        <h1 className="font-[700] uppercase textTitle text-[20px] text-black!tracking-[3px] mb-4 pb-2 w-max">
          Savings funds:
        </h1>
        <div>
          <TableSavingsFunds />
        </div>
      </div>
    </div>
  );
}

export default OverviewHome;
