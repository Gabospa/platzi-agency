let = $accordion = document.getElementById("accordion");

let ciaData = null;

fetch(
    "https://app.scrapinghub.com/api/v2/datasets/kdybI1E79Ww/download?format=json"
)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // Work with JSON data here
        ciaData = data;
        cards = ciaData.map(
            (x, idx) => `
    <div class="card">
    <div class="card-header bg-dark" id="heading${idx}">
      <h2 class="mb-0">
        <button
          class="btn btn-outline-light"
          type="button"
          data-toggle="collapse"
          data-target="#collapse${idx}"
          aria-expanded="true"
          aria-controls="collapse${idx}"
        >
          ${x.title}
        </button>
      </h2>
    </div>

    <div
      id="collapse${idx}"
      class="collapse"
      aria-labelledby="heading${idx}"
      data-parent="#accordion"
    >
      <div class="card-body">
        ${x.body}
        <br>
        <br>
        <a href=${x.url} target="_blank">Ver más</a>
      </div>
    </div>
  </div>
    `
        );
        for (i = 0; i < cards.length; i++) {
            $accordion.innerHTML += cards[i];
        }
    })
    .catch((err) => {
        // Do something for an error here
    });
index.html

    < !DOCTYPE html >
        <html lang="es">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Platzi Intelligence Agency</title>

                <!-- Own styles -->

    <link rel="stylesheet" href="../src/css/main.css" />

                <!-- Bootstrap  -->

    <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossorigin="anonymous"
                />
            </head>
            <body class="bg-secondary">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <!-- Header -->
          <div class="row">
                                <div class="col p-0">
                                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                                        <a class="navbar-brand p-0" href="../">
                                            <img
                                                src="../src/img/isotipo.png"
                                                width="50"
                                                height="50"
                                                class="d-inline-block align-top"
                                                alt="logo"
                                            />
                                        </a>
                                        <button
                                            class="navbar-toggler"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#navbarTogglerDemo02"
                                            aria-controls="navbarTogglerDemo02"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation"
                                        >
                                            <span class="navbar-toggler-icon"></span>
                                        </button>

                                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                                                <li class="nav-item active">
                                                    <a class="nav-link" href="../"
                                                    >Inicio <span class="sr-only">(current)</span></a
                                                    >
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="../cia">CIA</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>

                            <!-- Header end -->

          <!-- Body -->

          <div class="row bg-light">
                                <div class="col d-flex flex-column align-items-center">
                                    <div
                                        class="accordion my-5 mx-lg-5 px-lg-5 w-100"
                                        id="accordion"
                                    ></div>
                                </div>
                            </div>

                            <!-- Body end -->

          <!-- Footer start -->

          <footer class="row bg-dark" style="height: 40px;">
                                <div
                                    class="col d-flex flex-row justify-content-center align-items-center p-0"
                                >
                                    <a href="https://platzi.com" class="platzi_logo" target="_blank">
                                        <img
                                            width="20"
                                            src="../src/img/platzi-isotipo.png"
                                            alt="Isotipo de Platzi"
                                        />
                                        <img
                                            height="20"
                                            src="../src/img/platzi-logotipo.png"
                                            alt="Logotipo de Platzi"
                                        />
                                    </a>
                                </div>
                            </footer>

                            <!-- Footer end -->
        </div>
                    </div>
                </div>

                <!-- Bootstrap -->

    <script
                    src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
                    crossorigin="anonymous"
                ></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                    crossorigin="anonymous"
                ></script>
                <script
                    src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
                    crossorigin="anonymous"
                ></script>

                <!-- CIA Fetch data -->

    <script src="./fetchData.js"></script>
            </body>
        </html>