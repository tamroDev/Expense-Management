function Box({ children }) {
  return (
    <div className="2xl:w-[49%] h-[400px] bg-gray-50 shadow-lg flexCenter sm:w-full">
      {children}
    </div>
  );
}

export default Box;
