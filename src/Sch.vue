<template>
  <section class="presentation-sch">
    <div class="titre">
        <h1>Science <br>
          Humaines</h1>
    </div>
    <!-- <div class="livre-sch">
      <div>
        <img src="./assets/images/sch/couverture/sch-s1-en.jpg" alt="livre de science" class="livre-1">
      </div>
      <div>
        <img src="./assets/images/sch/couverture/sch-s2-fr.jpg" alt="livre de science" class="livre-2">
      </div>
 
    </div> -->
    <div class="caroussel-sch">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="./assets/images/sch/couverture/sch-s1-en.jpg" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="./assets/images/sch/couverture/sch-s2-fr.jpg" alt="Second slide">
          </div>
        </div>
      </div>
    </div>
    

  </section>

  <!--------------------- section 2 ------------------------>
  <section class="premiere-annee section-sch">
    <h2 class="titre-sch-s1">S1</h2>
      <div class="sch-description">
        <div class="section-sch-description">       
            
            <p>
             <strong>Chapitres :</strong>
            </p>
              <div class="programme-sch-s1">
                <p class="programme-sch-s1-detail">
                  -La Géographie et ses outils<br>
                  -L’Europe et son espace physique et humain<br>
                  -De l’Histoire à mon histoire personnelle<br>
                  -La Terre, ses rotations et ses saisons
                </p>

                <p class="programme-sch-s1-detail">
                 -Comprendre les climats du monde<br>
                  -La Préhistoire et l’apparition des hommes<br>
                  - Les modes de vie humains pendant la Préhistoire<br>
                  -Une civilisation à l’âge du fer : les Celtes
                </p>

                <p>
                  <strong>Disponible en :</strong> FR, EN, DE
                </p>
              </div>  
        </div>

        <div class="card-sch-s1">
            <h3>Thématiques</h3><br>

            <p>
              Géographie, Histoire, documents, rotations, échelles, météorologie, climatologie, Europe, Préhistoire, l’outils, l’art, l’agriculture, l’artisanat, archéologie, Néolithique etc...
            </p> 
            <CarousselSch />
        </div>
    
      </div>

  </section>
<!------------------------ section 3 ------------------------->
  <section class="deuxieme-annee section-sch-s2">
    <div class="card-sch-s2">
        <h3>Thématiques</h3><br>
        <p>
          Le Rhin, érosion, paysage alpin, axe urbain/industriel, site 
          urbain/fluvial, Rotterdam, agriculture intensive, l'écriture,
          hiéroglyphe, cunéiforme, société mésopotamienne, Croissant fertile, le Nil, les dieux, le pharaon etc...
        </p> 
        <CarousselSch />
    </div>

    <div class="section-sch-description">
      <h2 class="titre-sch-s2">S2</h2>
      <p class="sch-s2-chapitre">
        <strong>Chapîtres :</strong>
      </p>
      <p class="programme-sch-s2">
        - Les cours d’eau et leur organisation spatiale <br>
        - Histoire, les civilisations anciennes <br>
        - L’homme face aux enjeux climatiques <br>
        - Réfléchir et travailler en groupe : Comparer les civilisations, Projet intégré
      </p>

      <p>
        <strong>Disponible en :</strong> FR, EN, DE
       </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import CarousselSch from '@/components/CarousselSch.vue'
</script>

<style scoped lang="scss">
// section commune

h2{
  font-size: 7rem;
}

/////////////////////////////////////// section 1 presentation sch
.livre-sch{
  display: flex;
}

.presentation-sch{
  display: flex;
  justify-content: space-around;
  align-items: center;  
  background: #eff6ff;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.caroussel-sch{
  width: 350px;
}

// .presentation-sch img{
//   width: 350px;
//   height: 500px;
// }

.card-sch-s1, h3{
  text-align: center;
  // color: white;
  color: black;
}


////////////////////////////////////////////// section 2 s1-sch
.titre-sch-s1{
  text-align: center;
  margin-bottom: 2.2rem;
}
.sch-description{
  display: flex;
  justify-content: space-around;
  
}
.section-sch{
  padding-top: 4rem;
}
.titre-sch{
  text-align: center;
  font-size: 2.5rem;
}
.card-sch-s1{
  // border: 0.1px solid #138986;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30%;
  padding: 25px 25px;
  background-color: #d0e1f7;
}

/////////////////////////////////// section 3 section-sch-s2
.section-sch-description{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: center;
}

.section-sch-s2{
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  padding-top: 5rem;
}

.card-sch-s2{
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30%;
  padding: 25px 25px;
  background-color: #d0e1f7;
}

.card-sch-s2{
  text-align: center;
  color: black;
}


/**************************** MEDIA QUERIE *******************************/
@media screen and (max-width: 1200px) {

  /////////////////////////////////////// section 1 presentation sch
  .titre h1{
    font-size: 3rem;
    text-align: center;
  }

  .livre-sch{
  display: flex;
  }
 
.presentation-sch img{
  width: 280px;
  height: 380px;
}

//////////////////////////////////////////// section 2 sch s1
.sch-description{
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;  
}

.card-sch-s1{
  width: 45%;
}

/////////////////////////////////////////////// section 2 sch

.section-sch-s2{
  margin-top: 0px;
  display: flex;
  flex-direction: column-reverse;
  padding-top: 3.5rem;
}

.titre-sch-s2{
  text-align: center;
}

.sch-s2-chapitre{
  margin-top: 1.5rem;
}

.programme-sch-s2, .programme-sch-s1-detail{
  padding-left: 5px
}

.card-sch-s2{
  display: flex;
  align-self: center;
  width: 45%;
}

}

@media screen and (max-width: 900px) {

  /////////////////////////////////////// section 1 presentation sch
  .titre h1{
    font-size: 3rem;
    text-align: center;
  }

  .livre-sch{
  display: flex;
  }
 
.presentation-sch img{
  width: 280px;
  height: 380px;
}

//////////////////////////////////////////// section 2 sch s1
.sch-description{
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;  
}

.card-sch-s1{
  width: 60%;
}

/////////////////////////////////////////////// section 2 sch

.section-sch-s2{
  margin-top: 0px;
  display: flex;
  flex-direction: column-reverse;
  padding-top: 3.5rem;
}

.titre-sch-s2{
  text-align: center;
}

.sch-s2-chapitre{
  margin-top: 1.5rem;
}

.programme-sch-s2, .programme-sch-s1-detail{
  padding-left: 5px
}

.card-sch-s2{
  display: flex;
  align-self: center;
  width: 60%;
}


}

@media screen  and (max-width: 800px){
    .presentation-sch{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    background: #eff6ff;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .titre{
    font: 4rem;
  }

  .caroussel-sch{
    width: 350px;
    margin-top: 3rem;
  }
}

@media screen and (max-width: 500px) {

  /////////////////////////////////////// section 1 presentation sch
  .titre h1{
    font-size: 3rem;
    text-align: center;
  }

  .livre-sch{
  display: flex;
  flex-direction: column;
  }

.presentation-sch{
  // height: 100vh;
} 

.presentation-sch img{
  width: 280px;
  height: 330px;
}

//////////////////////////////////////////// section 2 sch s1
.titre-sch-s1{
  text-align: center;
  margin-bottom: 2.2rem;
}
.sch-description{
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;  
}
.section-sch{
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
}

.programme-sch-s1{
  // display: flex;
  // flex-direction: column;
  // align-items: center;
}

.titre-sch{
  text-align: center;
  font-size: 2.5rem;
}
.card-sch-s1{
  display: flex;
  flex-direction: column;
  width: 95%;
}

/////////////////////////////////////////////// section 2 sch
.section-sch-s2{
  margin-top: 0px;
  display: flex;
  flex-direction: column-reverse;
  padding-top: 3.5rem;
}

.titre-sch-s2{
  text-align: center;
}

.sch-s2-chapitre{
  margin-top: 1.5rem;
}

.programme-sch-s2, .programme-sch-s1-detail{
  padding-left: 5px
}

.card-sch-s2{
  display: flex;
  align-self: center;
  width: 95%;
}

}

@media screen and (max-width: 375px) {

  /////////////////////////////////////// section 1 presentation sch
  .titre h1{
    font-size: 3rem;
    text-align: center;
  }

  .livre-sch{
  display: flex;
  flex-direction: column;
  }

.presentation-sch{
  // height: 100vh
} 

.presentation-sch img{
  width: 280px;
  height: 330px;
}

//////////////////////////////////////////// section 2 sch s1
.titre-sch-s1{
  text-align: center;
  margin-bottom: 2.2rem;
}
.sch-description{
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;  
}
.section-sch{
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
}

.programme-sch-s1{
  // display: flex;
  // flex-direction: column;
  // align-items: center;
}

.titre-sch{
  text-align: center;
  font-size: 2.5rem;
}
.card-sch-s1{
  display: flex;
  flex-direction: column;
  width: 95%;
}

/////////////////////////////////////////////// section 2 sch
.section-sch-s2{
  margin-top: 0px;
  display: flex;
  flex-direction: column-reverse;
  padding-top: 3.5rem;
}

.titre-sch-s2{
  text-align: center;
}

.sch-s2-chapitre{
  margin-top: 1.5rem;
}

.programme-sch-s2, .programme-sch-s1-detail{
  padding-left: 5px
}

.card-sch-s2{
  display: flex;
  align-self: center;
  width: 95%;
}

}







</style>
