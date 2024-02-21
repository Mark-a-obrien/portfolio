"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library} from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft);


const CardDetials = ({country, onClickBackToMainArea}: {country:any, onClickBackToMainArea:any}) => {

  if (!country) return <p>Loading...</p>; // returns loading when waiting for data froma api

  const nativeName:any = Object.values(country.name.nativeName)[0];
  const currency:any = Object.values(country.currencies)[0];
  const languages:any = [];

  const population = new Intl.NumberFormat('en-us',).format(
    country.population,
  );

  for (let i = 0; i < Object.values(country.languages).length; i++) {
    const element = Object.values(country.languages)[i];
    languages.push(element);
  }

  // console.log(languages);
  return (
    <section className="flex flex-col space-y-20 dark:text-white ">

      <div>
        <button className="py-1 px-8 dark:bg-sub-navy rounded-md card-box-shadow" onClick={onClickBackToMainArea}><FontAwesomeIcon className="pr-2" icon={faArrowLeft} />Back</button>
      </div>

      <section className="flex lg:flex-row lg:gap-28 mobile:flex-col mobile:gap-8">
        <div>
          <img className="w-96" src={country.flags.png} alt="Flag" />
        </div>
        <div className="flex flex-col gap-4">
          
          <h1 className="text-detail-page text-3xl font-bold">{country.name.common}</h1>

          <div className="flex lg:flex-row mobile:flex-col gap-10">
            
            <div className="flex flex-col gap-2">
              <div className="flex gap-2"><p>Native Name: </p><p className="font-extralight">{nativeName.official}</p></div>
              <div className="flex gap-2"><p>Population: </p><p className="font-extralight">{population}</p></div>
              <div className="flex gap-2"><p>Region: </p><p className="font-extralight">{country.region}</p></div>
              <div className="flex gap-2"><p>Sub Region: </p><p className="font-extralight">{country.subregion}</p></div>
              <div className="flex gap-2"><p>Capital: </p><p className="font-extralight">{country.capital}</p></div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2"><p>Top Level Domain: </p><p className="font-extralight">{country.tld[0]}</p></div>
              <div className="flex gap-2"><p>Currencies: </p><p className="font-extralight">{currency.name}</p></div>
              <div className="flex gap-2"><p>Languages: </p><div className="flex font-extralight">{languages.map( (lan:string, i:string) => <p key={i}>{lan}{parseInt(i)<languages.length-1 && ","}&nbsp;</p>)}</div></div>
            </div>
          </div>
        </div>
      </section>

    </section>
  )

}

export default CardDetials;