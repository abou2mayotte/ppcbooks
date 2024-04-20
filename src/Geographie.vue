<template>
<!---------------- presentation geo --------------->

  <section class="presentation-geographie">
      <div class="titre">
          <h1 class="titre-geo">Géographie</h1>
      </div>
      <!-- <div class="livre-geographie">

        <div>
          <img src="./assets/images/geographie/couverture/geo-4-5-en.jpg" alt="livre de geographie" class="livre-1">
        </div>

        <div>
          <img src="./assets/images/geographie/couverture/geo-6-fr.jpg" alt="livre de geographie" class="livre-2">
        </div>

        <div>
          <img src="./assets/images/geographie/couverture/geo-7-en.jpg" alt="livre de geographie" class="livre-3">
        </div>
    
      </div> -->

      <div class="caroussel-geographie">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="./assets/images/geographie/couverture/geo-4-5-en.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="./assets/images/geographie/couverture/geo-6-fr.jpg" alt="livre de geographie">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="./assets/images/geographie/couverture/geo-7-en.jpg" alt="livre d'hisoire">
                </div>
              </div>
          </div>
      </div>
  </section>


<!---------------- geo S4-5 --------------->
  <section class="s4-5-geo container">
    <h2 class="titre-geographie">S4</h2>
    <div class="geographie-description">

        <div class="section-geographie-description ">       
            <p>
             <strong> Chapitres :</strong>
            </p>
              <div class="programme-s4-s5-geo">
                <p>
                  - Mon école, ma région, l'Union Européenne <br>
                  - La population mondiale, structure et évolution <br>
                  - Structure de la terre et tectonique des plaques <br>
                  - Un environnement menacé problème et solution
                </p>

                <p>
                  <strong>Disponible en :</strong> FR, EN, DE
                </p>
              </div>  
        </div>

        <div class="card-geo">
            <h3>Thématiques</h3><br>
            <p>
              Latitude, longitude, carte topographique, CEE, UE, climats européens, marché commun, Politique agricole, traité de Maastricht, facteurs naturels, facteurs humains, phénomène migratoire, transition démographique, tectonique des plaques, volcan, relief, séisme, développement durable, pollution etc...
            </p>
            <CarousselGeo />
        </div>
    
    </div>
  </section>


<!---------------- geo S6 --------------->
  <section class="geo-s6 section-s6 geo container">
    <div class="card-geographie-s6 card-geo">
            <h3>Thématiques</h3> <br>
            <p>
              Indicateurs, transition démographique, alimentation, mal-développement, ressources naturelles, mondialisation, matière premières, changement climatique, développement durable, agriculture biologique/raisonnée, tourisme de masse, mobilité humaine, etc...
            </p> 
            <CarousselGeo />
    </div>

    <div class="section-geo-description">
        <h2>S6</h2>
        <p>
          <strong>Chapitres :</strong>
        </p>
        <p>
          - Le défi du développement <br>
          - Les opportunités et les défis liés à la mondialisation <br>
          - L'environnement et le changement climatique
        </p>
        <p>
          <strong>Disponible en :</strong> FR, EN, DE
        </p>
    </div>
  </section>



<!---------------- geo S7 --------------->
  <section class="geo-s7 section-s7 geo container">  
    <div class="section-geo-description">
      <h2>S7</h2>
      <p>
       <strong>Chapitres :</strong>
      </p>
      <p>
        - Qu’est-ce que l’Europe ? Qu’est-ce que l’UE ? <br>
        - L’Europe, un environnement naturel anthropisé <br>
        - Les Européens : localisation et évolution <br>
        - Les mutations de l’économie européenne
      </p>
      <p>
        <strong>Disponible en : </strong> FR, EN
      </p>
    </div>

    <div class="card-geo-s7 card-geo">
      <h3>Thématiques</h3><br>  
      <p>
        CECA, traité de Rome, UE, supranationalité, identité européenne, démocratie, changement, climatique, ressources renouvelables et non renouvelables, paysages européens, densité, métropole, démographie post-transitionnelle, agriculture intensive/biologique/durable, le rôle des transports, innovations industrielles, aides européennes, la PAC, pacte vert.
      </p> 
      <CarousselGeo />
    </div>
  </section>
</template>

<script setup lang="ts">
import CarousselGeo from '@/components/CarousselGeo.vue'
</script>

<style scoped lang="scss">
h2{
  font-size: 7rem;
}


///////////////// commun à toute les sections
.s4-5-geo, .geo-s6, .geo-s7{
  margin-top: 12rem;
}

.card-geo{
  border: 0.1px solid #fcf9ce;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  padding: 25px 25px;
  background-color: #cae2d6;
}

.card-geo, h3{
  text-align: center;
  color: black;
}

.geo{
  display: flex;
  justify-content: space-around;
}

.section-geo-description{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: center;
}

//////////////////// section 1 presentation geo

.titre-geographie{
  text-align: center;
  margin-bottom: 3.5rem;
}

.presentation-geographie{
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #cae2d6;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.caroussel-geographie{
  width: 30%;
}


.livre-geographie img{
  width: 350px;
  height: 500px;
}

.livre-geographie{
  display:flex;
  // justify-content: space-around;
  // width: 100%;
}

.section-geographie-description{
  display: flex;
  flex-direction: column;
  align-self: center;
}



//////////////////// section 2 geo S4-S5


.geographie-description{
  display: flex;
  justify-content: space-around; 
}

//////////////////// section 3 geo S6
.section-geo-description{
  width: 50%;
}


/*************************** MEDIA QUERI *********************************/

@media screen and (max-width: 991px){
  //////////////////////// commun a toute les sections
.card-geo{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 98%;
}

//////////////////// section 1 presentation geo  ///////////////////
.livre-geographie{
  // display:flex;
  // flex-direction: column;
}

.livre-geographie img{
  width: 260px;
  height: 440px;
  margin-top: 1.5rem;
}

.titre-geo{
  font-size: 4rem;
}

.presentation-geographie{
  margin-top: 1.5rem;
}

//////////////////// section 2 geo S4-5  ///////////////////////////

.geographie-description{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-geographie-description{
  display: flex;
  flex-direction: column;
  align-self: center;
}



//////////////////// section 3 geo S6  ///////////////////////////
.geo-s6{
  display: flex;
  flex-direction: column-reverse;
}

.section-geo-description{
  width: auto;
}

//////////////////// section 4 geo S7  ///////////////////////////
.geo-s7{
  display: flex;
  flex-direction: column;
}
}

@media screen and (min-width: 801px) and (max-width: 991px){
  .card-geo{
    width: 70%;
  }

  .card-geographie-s6, .card-geo-s7{
    display: flex;
    align-self: center;
  }


}

@media screen and (max-width: 800px) {
//////////////////////// commun a toute les sections
.card-geographie-s6, .card-geo-s7{
    display: flex;
    align-self: center;
  }

.card-geo{
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 98%;
}

//////////////////// section 1 presentation geo  ///////////////////

  .presentation-geographie{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    background: #cae2d6;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .titre{
    font: 4rem;
  }

  .caroussel-geographie{
    width: 350px;
    margin-top: 3rem;
  }

.livre-geographie{
  // display:flex;
  // flex-direction: column;
}

.livre-geographie img{
  width: 260px;
  height: 440px;
  margin-top: 1.5rem;
}

.titre-geo{
  font-size: 4rem;
}

.presentation-geographie{
  margin-top: 1.5rem;
}

//////////////////// section 2 geo S4-5  ///////////////////////////

.geographie-description{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-geographie-description{
  display: flex;
  flex-direction: column;
  align-self: center;
}



//////////////////// section 3 geo S6  ///////////////////////////
.geo-s6{
  display: flex;
  flex-direction: column-reverse;
}

.section-geo-description{
  width: auto;
}

//////////////////// section 4 geo S7  ///////////////////////////
.geo-s7{
  display: flex;
  flex-direction: column;
}

}

@media screen and (min-width: 501px) and (max-width: 800px){
  ///////// commun a toute les sections ///////////////
  .card-geo{
    width: 70%;
  }

  // .card-geographie-s6, .card-geo-s7{
  //   display: flex;
  //   flex-direction: column;
  //   align-self: center;
  // }

  .programme-s4-s5-geo{
    display: flex;
    flex-direction: column;
    align-self: center;
  }

}

@media screen and (max-width: 500px) {
  ///////////////////// section commun ////////////////////////////@at-root

  
  ////////////////////section 1 presentation geo  ///////////////////
.livre-geographie{
  display:flex;
  flex-direction: column;
}

.livre-geographie img{
  width: 300px;
  height: 390px;
  margin-top: 1.5rem;
}

.titre-geo{
  font-size: 4rem;
}

.presentation-geographie{
  margin-top: 1.5rem;
}

////////////////////section 2 geo S4-5  ///////////////////////////

.geographie-description{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-geo{
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 98%;
}

////////////////////section 2 geo S6  ///////////////////////////
.geo-s6{
  display: flex;
  flex-direction: column-reverse;
}

.section-geo-description{
  width: auto;
}

////////////////////section 3 geo S7  ///////////////////////////
.geo-s7{
  display: flex;
  flex-direction: column;
}

}

@media screen and (max-width: 375px) {
  ////////////////////section 1 presentation geo  ///////////////////
.livre-geographie{
  display:flex;
  flex-direction: column;
}

.livre-geographie img{
  width: 300px;
  height: 390px;
  margin-top: 1.5rem;
}

.titre-geo{
  font-size: 4rem;
}

.presentation-geographie{
  margin-top: 1.5rem;
}

////////////////////section 2 geo S4-5  ///////////////////////////

.geographie-description{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-geo{
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 98%;
}

////////////////////section 2 geo S6  ///////////////////////////
.geo-s6{
  display: flex;
  flex-direction: column-reverse;
}

.section-geo-description{
  width: auto;
}

////////////////////section 3 geo S7  ///////////////////////////
.geo-s7{
  display: flex;
  flex-direction: column;
}

}

</style>
