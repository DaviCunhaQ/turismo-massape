import { Link } from "react-router-dom";

// src/pages/Home.tsx
export default function Home() {
  return (
    <div className="bg-[var(--ultra-soft-blue)]">
      <header className="bg-[var(--primary-color)] w-full h-auto flex justify-center sticky">
        <div className="container flex flex-col justify-center items-center h-full px-6 gap-2">
          <div className="h-auto w-full flex items-center justify-center">
            <img
              src="massape/logo-massape-fascinante.png"
              alt=""
              className="lg:max-w-[50%] md:max-w-[70%] max-w-full h-auto mt-2 mb-2"
            />
          </div>
        </div>
      </header>

      <main className="w-full flex justify-center py-6 min-h-[calc(100vh-5rem)]">
        <div className="container max-w-screen-lg flex flex-col items-center gap-6 px-4">
          <img
            src="massape/massape-bg.png"
            alt="Banner de Massapê"
            className="w-[85%] h-auto rounded-lg shadow-md md:w-[80%] lg:w-[70%]"
          />
          <div className="w-[85%] md:w-[80%] lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/sobre">
              <div
                id="sobre"
                className="bg-no-repeat bg-cover bg-center text-lg font-bold aspect-[3/1] bg-[var(--primary-color)] text-white border-4 border-[var(--soft-blue)] rounded-2xl flex items-center justify-center no-underline shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              >
                Sobre nós
              </div>
            </Link>
            <a
              id="destinos"
              href="./links/destinos.html"
              className="bg-no-repeat bg-cover bg-center text-lg font-bold aspect-[3/1] bg-[var(--primary-color)] text-white border-4 border-[var(--soft-blue)] rounded-2xl flex items-center justify-center no-underline shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Destinos
            </a>
            <a
              id="hospedagem"
              href="./links/hospedagem.html"
              className="bg-no-repeat bg-cover bg-center text-lg font-bold aspect-[3/1] bg-[var(--primary-color)] text-white border-4 border-[var(--soft-blue)] rounded-2xl flex items-center justify-center no-underline shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Hospedagem
            </a>
            <a
              id="gastronomia"
              href="./links/gastronomia.html"
              className="bg-no-repeat bg-cover bg-center text-lg font-bold aspect-[3/1] bg-[var(--primary-color)] text-white border-4 border-[var(--soft-blue)] rounded-2xl flex items-center justify-center no-underline shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Gastronomia
            </a>
            <a
              id="eventos"
              href="./links/eventos.html"
              className="bg-no-repeat bg-cover bg-center text-lg font-bold aspect-[3/1] bg-[var(--primary-color)] text-white border-4 border-[var(--soft-blue)] rounded-2xl flex items-center justify-center no-underline shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Eventos
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-[var(--soft-blue)] w-full h-12 flex justify-center items-center">
        <p className="text-sm text-center text-white font-semibold">
          Prefeitura de Massapê - CE
        </p>
      </footer>
    </div>
  );
}
