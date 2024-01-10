import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          html,
          body,
          input {
            font-family: "Mulish", sans-serif;
          }

          .logo {
            width: 2.5rem;
            height: 2.5rem;
          }

          .section-padding {
            padding: 100px 0;
          }

          .carousel-item {
            height: 100vh;
            min-height: 300px;
          }

          .carousel-caption {
            border-bottom: 220px;
            z-index: 2;
          }

          .carousel-caption h5 {
            font-size: 45px;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-top: 25px;
          }

          .carousel-caption p {
            width: 60%;
            margin: auto;
            font-size: 18px;
            line-height: 1.9;
          }

          .navbar-nav a {
            font-size: 15px;
            text-transform: uppercase;
            font-weight: 500;
          }

          .navbar-light .navbar-brand {
            color: #000;
            font-size: 25px;
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 2px;
          }

          .w-100 {
            height: 100vh;
          }

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            .carousel-caption {
              bottom: 370px;
            }
            .carousel-caption p {
              width: 100%;
            }
          }

          @media only screen and (max-width: 767px) {
            .navbar-nav {
              text-align: center;
            }
            .carousel-caption {
              bottom: 125px;
            }
            .carousel-caption h5 {
              font-size: 17px;
            }
            .carousel-caption a {
              padding: 10px 15px;
            }
            .carousel-item {
              height: 67vh;
              min-height: 300px;
            }
            .carousel-inner > img {
              height: 53vh;
            }
            .w-100 {
              height: 53vh;
            }
          }
        `}</style>
      </Head>
      <header>
        <div class="header_right">
          <div class="text-lg-end">
            <span class="text-success">Fale</span> Conosco
            <span class="phone_no">(79)9821-12123</span>
          </div>
        </div>
      </header>
      <main>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="/have-cameras-will-travel.jpg"
                class="d-block w-100"
                alt="cameras"
              />
              <div class="carousel-caption">
                <p class="text-bg-success">A sua viagem!</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="/antique-binoculars-and-map.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption">
                <p class="text-bg-success">As melhores ofertas!</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="/travel-written-in-sand.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </main>
      <footer>
        <section id="about" class="bg-black">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-12 col-12 bg">
                <div class="about-img">
                  <img
                    src="/rolling-suitcase-into-hotel.jpg"
                    alt="travel"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                <div class="about-text">
                  <h2 class="text-white">
                    Nós temos o melhor serviço{" "}
                    <span class="text-success">acredite!</span>
                  </h2>
                  <p class="text-secondary">Sempre pensando em você!</p>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid bg-dark text-light footer pt-1 mt-1">
            <div class="container py-5">
              <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                  <h4 class="text-white mb-3">
                    ViaVem <i class="fa fa-plane" aria-hidden="true"></i>
                  </h4>
                  <a href="#" class="btn btn-link text-white">
                    Endereço <i class="fa fa-map" aria-hidden="true"></i>
                  </a>
                  <a href="#" class="btn btn-link text-white">
                    Contato <i class="fa fa-whatsapp" aria-hidden="true"></i>
                  </a>
                  <a href="#" class="btn btn-link text-white">
                    Termos e Condições
                  </a>
                  <a href="#" class="btn btn-link text-white">
                    FAQ & HELP
                  </a>
                </div>
                <div class="col lg-3 col-md-6">
                  <h4 class="text-white mb-3">Sede</h4>
                  <p class="mb-2">
                    <i class="fa fa-location-arrow" aria-hidden="true"></i>
                    São Cristovão-SE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default Index;
