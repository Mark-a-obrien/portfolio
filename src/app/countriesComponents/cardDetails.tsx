"use client"


const CardDetials = ({country, onClickBackToMainArea}: {country:any, onClickBackToMainArea:any}) => {

  if (!country) return <p>Loading...</p>;

  const nativeName:any = Object.values(country.name.nativeName)[0];

  console.log(nativeName.official);

  const currency:any = Object.values(country.currencies)[0];

  const languages:any = [];

  for (let i = 0; i < Object.values(country.languages).length; i++) {
    const element = Object.values(country.languages)[i];
    languages.push(element);
  }

  // console.log(languages);
  return (
    <section className="flex flex-col space-y-8">

      <div>
        <button className="py-1  px-8 bg-sub-navy rounded-md" onClick={onClickBackToMainArea}>Back</button>
      </div>

      <section className="flex gap-28">
        <div>
          <img className="w-96" src={country.flags.png} alt="Flag" />
        </div>
        <div className="flex flex-col gap-4">
          
          <h1 className="text-detail-page font-bold">{country.name.official}</h1>

          <div className="flex gap-10">
            
            <div className="flex flex-col gap-2">
              <div className="flex gap-2"><p>Native Name: </p><p className="font-extralight">{nativeName.official}</p></div>
              <div className="flex gap-2"><p>Population: </p><p className="font-extralight">{country.population}</p></div>
              <div className="flex gap-2"><p>Region: </p><p className="font-extralight">{country.region}</p></div>
              <div className="flex gap-2"><p>Sub Region: </p><p className="font-extralight">{country.subregion}</p></div>
              <div className="flex gap-2"><p>Capital: </p><p className="font-extralight">{country.capital}</p></div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2"><p>Top Level Domain: </p><p className="font-extralight">{country.tld[0]}</p></div>
              <div className="flex gap-2"><p>Currencies: </p><p className="font-extralight">{currency.name}</p></div>
              <div className="flex gap-2"><p>Languages: </p><div className="font-extralight">{languages.map( (lan:string, i:string) => <p key={i}>{lan}</p>)}</div></div>
            </div>
          </div>
        </div>
      </section>

    </section>
  )

}

export default CardDetials;