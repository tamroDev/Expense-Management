function NoticationBox({ close }) {
  return (
    <div className="absolute inset-0 bg-[#00000038] flex  justify-center items-center ">
      <div className=" bg-white relative rounded-sm p-6">
        <button
          onClick={() => close(false)}
          className="absolute right-[-10px] top-[-10px] bg-red-500 w-[40px] h-[40px] flex justify-center items-center rounded-md shadow-2xl hover:opacity-90"
        >
          <i className="fa-solid fa-xmark text-white"></i>
        </button>
        <div className="text-[40px] mt-6 text-red-500 textTitle mb-8">
          {" "}
          Warning
        </div>
        <div className="max-w-[400px] leading-[23px] text-[14px] font-medium mb-8">
          The spending amount you have set exceeds the limit you previously set.
          Please reset your spending or increase your limit to match!
        </div>
        <button
          onClick={() => close(false)}
          className="w-full bg-blue-600 text-white font-bold uppercase text-[17px] py-4 mb-4 rounded-md"
        >
          I understand
        </button>
      </div>
    </div>
  );
}

export default NoticationBox;
