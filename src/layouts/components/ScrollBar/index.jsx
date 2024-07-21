import clsx from "clsx";

function ScrollBar({ children, flex }) {
  return (
    <div
      style={{ flex: `0 0 ${flex}` }}
      className={clsx(
        "scrollBar-custom flex flex-col items-center justify-start overflow-auto gap-3 max-h-[100%] h-[100%] pt-3 px-4"
      )}
    >
      {children}
    </div>
  );
}

export default ScrollBar;
