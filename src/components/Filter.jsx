import { FilterIcon } from "lucide-react";
import React from "react";

function Filter({ statuses, onFilter, onReset }) {
  return (
    <>
      <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
        <button
          id="hs-as-table-table-filter-dropdown"
          type="button"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-700 bg-neutral-900 text-neutral-100 shadow-sm hover:bg-neutral-800 focus:outline-none focus:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none"
          aria-haspopup="menu"
          aria-expanded="false"
          aria-label="Dropdown"
        >
          <FilterIcon size={16} />
          Filter
        </button>
        <div
          className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-700 min-w-48 z-20 bg-neutral-900 shadow-md rounded-lg mt-2"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="hs-as-table-table-filter-dropdown"
        >
          <div className="divide-y divide-gray-700">
            {statuses.map((status, index) => (
              <button
                key={index}
                className="flex py-2.5 px-3 w-full text-left"
                onClick={() => onFilter(status)}
              >
                <span className="text-sm text-neutral-100">{status}</span>
              </button>
            ))}
            <button
              className="flex py-2.5 px-3 w-full text-left bg-primary-600 "
              onClick={onReset}
            >
              <span className="text-sm text-white">Reset</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
