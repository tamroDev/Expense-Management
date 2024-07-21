import TableHome from "../../../../components/TableSpending";

function OverviewHome() {
  return (
    <div className={"w-full"}>
      <div className="bg-white w-full h-max mb-[20px] rounded-lg shadow-lg p-4">
        <h1 className="font-[700] uppercase textTitle text-[26px] text-black!tracking-[3px] mb-4 pb-2 w-max">
          Installed Spend:
        </h1>
        <div className="">
          <TableHome />
        </div>
      </div>
      <div className="bg-white w-full h-[500px] p-4">AHAHHAH</div>
    </div>
  );
}

export default OverviewHome;
