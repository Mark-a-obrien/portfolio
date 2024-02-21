import Header from "@/app/countriesComponents/header"
import MainArea from "@/app/countriesComponents/mainArea"
  

export default async function Page() {

  return (
  <div className="theme dark">
    <div className="flex flex-col space-y-8 pb-28 bg-light-mode-background dark:bg-primary-navy h-screen">
      <Header />

      <MainArea/>
    </div>
  </div>
  )
}

