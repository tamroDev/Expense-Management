import { Link } from "react-router-dom";
import Report from "../../../report/index";
function StatisticsGroup() {
  // const { totalExpenses, totalRevenu } = useSelector(
  //   (state) => state.statistic
  // );

  // console.log(totalExpenses, totalRevenu);
  return (
    <div className="w-full bg-gray-50 h-max py-8 shadow-lg">
      <div className="w-50% m-auto h-max text-center font-bold uppercase mt-3 text-red-500 text-[30px] textTitle tracking-widest mb-10">
        Statistical
      </div>
      <div className="w-full flex flex-auto flex-wrap p-3 justify-center gap-2">
        <Report hidden />
        <nav aria-label="Page navigation example">
          <ul className="list-style-none flex">
            <li>
              <a className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface/50 transition duration-300 dark:text-neutral-400">
                Previous
              </a>
            </li>
            <li>
              <a
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                href="#!"
              >
                1
              </a>
            </li>
            <li aria-current="page">
              <a
                className="relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition duration-300 focus:outline-none dark:bg-slate-900 dark:text-primary-500"
                href="#!"
              >
                2
                <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                  (current)
                </span>
              </a>
            </li>
            <li>
              <a
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                href="#!"
              >
                3
              </a>
            </li>
            <li>
              <a
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                href="#!"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Link
        className="bg-blue-500 text-white px-1 py-4 flexCenter w-[12%] m-3 rounded-xl uppercase font-bold text-[12px]"
        to={"/report"}
      >
        View report <i className="fa-regular fa-eye ml-2"></i>
      </Link>
    </div>
  );
}

export default StatisticsGroup;
