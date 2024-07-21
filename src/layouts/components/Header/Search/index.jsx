function Search() {
  return (
    <div className="w-[75%] ">
      <div className="h-full flex justify-center items-center">
        <div className=" w-[50%] relative">
          <input
            className="focus:outline-none w-[100%]  border border-black rounded-full px-[20px] py-[8px] text-[12px] font-[600]"
            type="text"
            placeholder="Search ..."
          />
          <button className="bg-black w-[15%] h-full border border-black text-white uppercase px-[10px] py-[8px] absolute right-0 rounded-r-3xl text-[12px] font-[600]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
