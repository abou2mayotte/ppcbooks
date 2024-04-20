<template>


<!-- Modal start geo-->
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
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img
                        class="d-block w-100"
                        src="../assets/images/geographie/demo/demo-geo-s4-5/geo-s4-s5-001.jpg"
                        alt="livre de geographie"
                    />
                    </div>
                    <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src="../assets/images/geographie/demo/demo-geo-s4-5/geo-s4-s5-002.jpg"
                        alt="livre de geographie"
                    />
                    </div>
                    <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src="../assets/images/geographie/demo/demo-geo-s4-5/geo-s4-s5-003.jpg"
                        alt="livre de geographie"
                    />
                    </div>
                    <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src="../assets/images/geographie/demo/demo-geo-s4-5/geo-s4-s5-004.jpg"
                        alt="livre de geographie"
                    />
                    </div>
                    <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src="../assets/images/geographie/demo/demo-geo-s4-5/geo-s4-s5-005.jpg"
                        alt="livre de geographie"
                    />
                    </div>
                    <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src="../assets/images/geographie/demo/demo-geo-s4-5/geo-s4-s5-006.jpg"
                        alt="livre de geographie"
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

    button{
      background: #a3e6c4;
    }
  </style>