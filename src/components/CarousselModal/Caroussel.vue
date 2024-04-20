<template>


<!-- Modal start sci S1-->
      <div class="contenu-livre">
        <div class="content">
          <i class="fas fa-book-open"></i>
          <div class="bouton-modal">
            <button
              type="button"
              class="btn"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >
              Démo
            </button>
          </div>
        </div>
      </div>

    <div
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <!--- caroussel start-->
                <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
                >
                <ol class="carousel-indicators">
                    <li
                       data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
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
                    <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="5"
                    ></li>
                    <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="6"
                    ></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img
                        class="d-block w-100"
                        src="../../assets/images/sci/demo/demo-sci-s1/sci-s1-01.jpg"
                        alt="livre d'histoire"
                    />
                    </div>
                    <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src="../../assets/images/sci/demo/demo-sci-s1/sci-s1-02.jpg"
                        alt="livre d'histoire"
                    />
                    </div>
                    <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src="../../assets/images/sci/demo/demo-sci-s1/sci-s1-03.jpg"
                        alt="livre d'histoire"
                    />
                    </div>
                    <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src="../../assets/images/sci/demo/demo-sci-s1/sci-s1-04.jpg"
                        alt="livre d'histoire"
                    />
                    </div>
                    <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src="../../assets/images/sci/demo/demo-sci-s1/sci-s1-05.jpg"
                        alt="livre d'histoire"
                    />
                    </div>
                    <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src="../../assets/images/sci/demo/demo-sci-s1/sci-s1-06.jpg"
                        alt="livre d'histoire"
                    />
                    </div>
                    <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src="../../assets/images/sci/demo/demo-sci-s1/sci-s1-07.jpg"
                        alt="livre d'histoire"
                    />
                    </div>
                </div>
                    <a
                        class="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                    >
                    <span
                    class="carousel-control-prev-icon"
                        aria-hidden="true"
                        ></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a
                        class="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                    >
                    <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
                <!-- caroussel end -->
            </div>
        </div>
    </div>
    <!-- caroussel end -->

</template>







<style scoped lang="scss">
    .carousel-control-next-icon,
    .carousel-control-prev-icon {
      background-color: #000;
      border-radius: 50%;
      padding: 1rem;
    }
  </style>