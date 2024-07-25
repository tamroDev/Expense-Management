function ButtonGroup({ handleRetype }) {
  return (
    <div className="mt-[20px] flex gap-3 w-[70%]">
      <button
        type="submit"
        className="p-4 bg-blue-500 text-white font-[400] text-[12px] uppercase rounded-2xl "
      >
        Create
      </button>
      <button
        onClick={handleRetype}
        className="p-4 bg-red-600 text-white font-[600] text-[12px] uppercase rounded-2xl"
      >
        Retype
      </button>
    </div>
  );
}

export default ButtonGroup;
