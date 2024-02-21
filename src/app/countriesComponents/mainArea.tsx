"use client"

import CardArea from "@/app/countriesComponents/CardArea"
import { SetStateAction, useState } from "react";
import DropdownMenu from "@/app/countriesComponents/dropDownMenu"

import FetchedData from "@/app/countriesComponents/fetchData";
import CardDetials from "./cardDetails";


function MainArea() {

  const countries = FetchedData(); //data fetched from api

  const [search, setSearch] = useState<FormDataEntryValue>("");
  const [filter, setFilter] = useState<FormDataEntryValue>("");
  const [country, setCountry] = useState<any>();



  function handleSubmit(e: React.SyntheticEvent): void {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form); 

    // You can pass formData as a fetch body directly:
   //  fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());

    setSearch(formJson.search)   

 }

 function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
 }

 function handleFilterInput(e: React.ChangeEvent<HTMLInputElement>) {
  setFilter(e.target.value);
  console.log(e.target.value);
}

function handleClick(con:any) {

  console.log(con);
  setCountry(con);
}

function onClickBackToMainArea() {

  setCountry(null);
}


  
  return (
    <div className="flex flex-col space-y-8 lg:px-36 mobile:px-6 pb-20 bg-light-mode-background dark:bg-primary-navy ">

    {country ? <CardDetials country={country} onClickBackToMainArea={onClickBackToMainArea} /> :
    
    
    <>
    <section>
        <form className="flex lg:justify-between lg:flex-row mobile:flex-col mobile:align-bottom  mobile:gap-4" method="post"  onSubmit={handleSubmit}>
          <input className="p-2 dark:bg-sub-navy dark:text-white card-box-shadow" type="text" name="search" id="search" onInput={handleInput} placeholder="Search for a country...." defaultValue={String(search)}/>
          {/* <button type="submit">Search</button> */}

          <DropdownMenu onInput={handleFilterInput} filter={String(filter)} />
        </form>
      </section>

      <main className="flex justify-center">
        <CardArea search={String(search)} filter={String(filter)} countries={countries} handleClick={handleClick}/>
      </main>
      </>
    }
    </div>
  )
}

export default MainArea