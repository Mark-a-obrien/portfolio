function Card({ imgSrc, country, population, region, capital, countryObj, handleClick }: { imgSrc:string, country:string, population:string, region:string, capital:string, countryObj:any, handleClick:any }) {
  return (
    <div className="bg-sub-navy w-64 h-80 rounded-md" onClick={() => handleClick(countryObj)}>
      <img className="object-fill h-40 w-96 rounded-tr-md rounded-tl-md" src={imgSrc} alt="flag" />
      <div className="flex flex-col space-y-2 p-6 bg-sub-navy">
        <h2 className="text-detail-page font-bold">{country}</h2>

        <div className="">
          <h3 className="text-homepage-items">Population: {population}</h3>
          <h2 className="text-homepage-items">Region: {region}</h2>
          <h2 className="text-homepage-items">Capital: {capital}</h2>
        </div>
      </div>

    </div>
  )
}

export default Card;