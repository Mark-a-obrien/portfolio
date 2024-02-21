"use client"

import Card from "@/app/countriesComponents/card"
import { Key } from "react";


const CardArea = ({search, filter, countries, handleClick}: {search:string, filter:string, countries:Array<object>, handleClick:Function}) => {
  

  function checkSearch(countryName: string) {
    return countryName.toLowerCase().includes(search.toLowerCase());
  }

  function checkFilter(countryRegion: string) {
    if (filter.toLowerCase() === "filter by regions") return true;
    return countryRegion.toLowerCase().includes(filter.toLowerCase());
  }

  return (
    <div className='grid lg:grid-cols-4 lg:gap-20 mobile-cols-1 mobile:gap-10'>
      {countries &&
        countries.map((country: { flags?: any; name?: any; population?: any; region?: any; capital?: any; }, index: Key | null | undefined) => (
        //   <img key={index} src={country.flags.png} alt='flag' width={100} />

        ( checkSearch(country.name.common) && checkFilter(country.region)) && <Card key={index} imgSrc={country.flags.png} country={country.name.common} population={country.population} region={country.region} capital={country.capital} countryObj={country} handleClick={handleClick} />
        
        

        ))}
    </div>
  );
};

export default CardArea;
