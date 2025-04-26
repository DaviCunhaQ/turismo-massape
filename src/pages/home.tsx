import { Link } from "react-router"
import Brasao from "../../public/massape/brasao-massape.png"
import Massape from "../../public/massape/massape-bg.png"

function Home (){
  const optionsList = [
    {
      title: "Destinos",
      image: Massape,
      link: "/destinations"
    }
  ]
  return(
    <>
      <header className="bg-primary-color w-full h-[2.5rem] sticky flex justify-center">
        <div className="w-full max-w-[90rem] flex justify-between items-center h-[2.5rem] px-6 py-2">
          <h1 className="font-bold text-[1.25rem] text-white">Guia de Turismo | Massapê-CE</h1>
          <img src={Brasao} alt="Massapê" className="h-[1.5rem]" />
        </div>
      </header>
      <main className="bg-ultra-soft-blue w-full h-auto flex justify-center">
        <div className="w-full max-w-[90rem] h-auto min-h-[calc(100vh-5rem)] flex flex-col items-center">
          <img src={Massape} alt="" className="w-full h-fit"/>
          {optionsList.map((option)=>{
            return(
              <Link className="hover:scale-[103%] transition-scale duration-500 border-3 border-soft-blue shadow-[0px_13px_15px_-3px_rgba(0,_0,_0,_0.2)] mt-6 rounded-[1.5rem] w-[80%] aspect-2/1 bg-primary-color flex items-center justify-center" to={option.link}>
                {option.title}
              </Link>
            )
          })}
        </div>
      </main>
      <footer className="bg-soft-blue w-full h-[2.5rem] sticky flex justify-center">

      </footer>
    </>
  )
}

export default Home