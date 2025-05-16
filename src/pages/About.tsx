import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-[var(--ultra-soft-blue)]">
      <header>
        <header className="bg-[var(--primary-color)] w-full h-auto flex justify-center sticky">
          <div className="container flex flex-col justify-center items-center h-full px-6 gap-2">
            <div className="h-auto w-full flex items-center justify-center">
              <img
                src="../public/massape/logo-massape-fascinante.png"
                alt=""
                className="lg:max-w-[50%] md:max-w-[70%] max-w-full h-auto mt-2 mb-2"
              />
            </div>
          </div>
        </header>

        <main className="bg-[var(--ultra-soft-blue)] w-full h-auto min-h-[calc(100vh-5rem)] flex justify-center">
          <div className="container flex flex-col items-center h-auto gap-4 mb-6 mt-8">
            <Link to="/" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-corner-down-left-icon lucide-corner-down-left"
              >
                <polyline points="9 10 4 15 9 20" />
                <path d="M20 4v7a4 4 0 0 1-4 4H4" />
              </svg>
              <h2 className="text-justify font-semibold">Retornar</h2>
            </Link>
            <div
              style={{ marginTop: "1.5rem", maxWidth: "30rem" }}
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="3"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="4"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    style={{ borderRadius: "1rem" }}
                    className="d-block w-100"
                    src="../public/carousel/massape/massape1.jpeg"
                    alt="Primeiro Slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    style={{ borderRadius: "1rem" }}
                    className="d-block w-100"
                    src="../public/carousel/massape/massape2.jpeg"
                    alt="Segundo Slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    style={{ borderRadius: "1rem" }}
                    className="d-block w-100"
                    src="../public/carousel/massape/massape3.jpeg"
                    alt="Terceiro Slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    style={{ borderRadius: "1rem" }}
                    className="d-block w-100"
                    src="../public/carousel/massape/massape4.jpeg"
                    alt="Terceiro Slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    style={{ borderRadius: "1rem" }}
                    className="d-block w-100"
                    src="../public/carousel/massape/massape5.jpeg"
                    alt="Terceiro Slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Anterior</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Próximo</span>
              </a>
            </div>
            <div className="w-[90%] flex flex-col items-center gap-4 mt-4 border-t-2 border-[var(--primary-color)] pt-2"></div>
            <h2 className="w-[85%] text-justify font-semibold">
              Massapê é um município localizado na região Norte do estado do
              Ceará, Brasil. Faz parte da microrregião de Sobral e está a
              aproximadamente 244 km da capital Fortaleza. A cidade possui uma
              população estimada em cerca de 38 mil habitantes (dados do IBGE
              2022). Massapê preserva fortes tradições culturais típicas do
              interior cearense, com festas religiosas, vaquejadas, cavalgadas e
              manifestações folclóricas, além é claro, do chitão mais antigo do
              estado do Ceará. O nome “Massapê” tem origem indígena e refere-se
              a um tipo de solo argiloso típico da região.
            </h2>
            <div className="w-[90%] flex flex-col items-center gap-4 mt-4 border-t-2 border-[var(--primary-color)] pt-2"></div>
          </div>
        </main>

        <footer className="bg-[var(--soft-blue)] w-full h-10 flex justify-center items-center">
          <p className="text-sm text-center text-white font-semibold">
            Prefeitura de Massapê - CE
          </p>
        </footer>
      </header>
    </div>
  );
}
