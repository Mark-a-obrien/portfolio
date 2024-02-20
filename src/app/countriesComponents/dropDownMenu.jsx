"use client"

import { Select, Option } from "@material-tailwind/react";
 
function DropDownMenu( {onInput, filter} ) {
  return (
      <select onInput={onInput} defaultValue={filter} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-sub-navy dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option >Filter by Regions</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
  );
}

export default DropDownMenu