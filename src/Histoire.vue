<template>
<!-------------------- presentation histoire -------------------->
  <section class="presentation-histoire">
    <div class="titre">
        <h1>Histoire</h1>
    </div>

    <!-- <div class="livre-hisoire">
      <div>
        <img src="./assets/images/histoire/couverture/histoire-s4-5-en.jpg" alt="livre d'histoire" class="livre-1">
      </div>

      <div>
        <img src="./assets/images/histoire/couverture/histoire-s6-fr.jpg" alt="livre d'hisoire" class="livre-2">
      </div>

      <div>
        <img src="./assets/images/histoire/couverture/histoire-s7-en.jpg" alt="livre d'hisoire" class="livre-2">
      </div>  
    </div> -->
      <div class="caroussel-histoire">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="./assets/images/histoire/couverture/histoire-s4-5-en.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="./assets/images/histoire/couverture/histoire-s6-fr.jpg" alt="livre de science">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="./assets/images/histoire/couverture/histoire-s7-en.jpg" alt="livre d'hisoire">
                </div>
              </div>
          </div>
      </div>
        
  </section>
<!-------------------- histoire S4-S5 -------------------->
  <section class="section-histoire histoire container">
    <h2 class="titre-histoire">S4-S5</h2>
    <div class="histoire-description">
        <div class="section-histoire-description">       
            
            <p>
              <strong>Chapitres :</strong>  
            </p>
              <div class="programme-hisoitre-s4-s5">
                <div>
                  <h4>S4</h4>
                  <p>
                    - Le monde politique au Moyen Âge <br>
                    - Vivre et mourir au Moyen Âge<br>
                    - Le monde chrétien et les autres cultures<br>
                    - L'humanisme et la renaissance en Europe<br>
                    - Réforme et contre reforme en Europe<br>
                    - Les grandes découvertes, l'Europe et le monde
                </p>
                </div>
                
                <div>
                  <h4>S5</h4>
                  <p>               
                  - Monarque et monarchie en Europe (XVII - XVIII) <br>
                  - La transformation de l'Europe par les lumières <br>
                  - Le temps des révolutions<br>
                  - La révolution industrielle <br>
                  - Les mouvements libéraux et nationaux aux XIXe siècle <br>
                  - L’Europe en 1914
                 </p>
                </div>
                
                <p>
                   <strong>Disponible en :</strong> FR, EN, DE
                </p>
              </div>  
        </div>

        <div class="card-histoire-s4-5 card-histoire">
            <h3>Thématiques</h3><br>
            <div>
              <h5>S4</h5>
              <p>
              Mérovingiens, carolingien, empereur, byzantin, empire romain féodalité, Clovis, pouvoir religieux, pape, seigneurie, progrès agricole, Croisade, islam, orthodoxie, réforme protestante, grandes explorations etc... 
            </p>
            </div>
            

          <div>
            <h5>S5</h5>
             <p>
              Monarchie absolue, Parlement, Lumières, indépendance des États Unis, révolution 
              française, Déclaration des droits humains, révolution industrielle, prolétariat, 
              unification italienne/ allemande, nationalisme etc...
            </p>
          </div>
           
             
             
            <CarousselHistoire />
        </div>
    
    </div>
  </section>

  <!-------------------- histoire S6 -------------------->
  <section class="histoire-s6 section-histoire histoire container">
    <div class="card-histoire-s6 card-histoire">
      <h3>Thématiques</h3> <br>  
      <p>
        Colonialisme, impérialisme, nationalisme, Crise de Fachoda, assimilation, paternalisme, 
        travail forcé, résistance, système d'alliance, guerre totale, après-guerre, dictature, démocratie, fascisme, totalitarisme, communisme, URSS, nazisme, Guerre mondiale, occupation, Krach 1929, new deal, société de consommation, etc...
      </p> 
      <CarousselHistoire />
    </div>
    <div class="section-histoire-description">
      <h2>S6</h2>
      
      <p>
        <strong>Chapitres :</strong>
      </p>
      <p>
        - La colonisation et l’impérialisme européen <br>
        - L’Europe transformée par la Première Guerre Mondiale <br>
        - - Dictatures et démocraties dans l’entre-deux-guerres<br>
        - L’Europe et les Européens dans la Seconde Guerre mondiale<br>
        - Les États-Unis depuis 1898, modèle et évolution
      </p>

      <p>
        <strong>Disponible en : </strong> FR, EN
      </p>
    </div>
  </section>
<!-------------------- histoire S7 -------------------->
  <section class="section-histoire container histoire histoire-s7 ">
    <h2 class="titre-histoire">S7</h2>
    <div class="histoire-description">
        <div class="section-histoire-description">       
           
            <p>
              <strong>Chapitres :</strong>
            </p>
              <div class="programme-histoire-s7">
                <p>
                  - L’après-guerre (1945-1947) <br>
                  - Guerre froide et relations internationales <br>
                  - De la fin de la guerre froide à nos jours<br>
                  - Décolonisation et indépendances depuis 1945<br>
                  - Europe de l’Est, Europe de l’Ouest - De la dictature à la démocratie (1974-1995)<br>
                  - La construction européenne depuis 1957<br>
                  - La Chine depuis 1949<br>
                  - Les États-Unis d’Amérique depuis 1945
                </p>

                <p>
                  <strong>Disponible en :</strong> FR, EN
                </p>
              </div>  
        </div>

        <div class="card-histoire-s7 card-histoire">
            <h3>Thématiques</h3> <br>
            <p>
              La détente, ONU, guerre fraîche, URSS, Congo, Vietnam, tiers monde, dictatures, démocratie, Mao, Trente glorieuse, Nuremberg, rideau de fer, dénazification, plan Marshall, mur de Berlin, CECA, plan Schuman, totalitarisme, communisme, Franco, etc...
            </p> 
            <CarousselHistoire />
        </div>
    
    </div>
  </section>

</template>

<script setup lang="ts">
import CarousselHistoire from '@/components/CarousselHistoire.vue';
</script>

<style scoped lang="scss">
//////////////////// commun à toute les sections //////////
h2{
  font-size: 7rem;
}
.histoire{
  margin-top: 12rem;
}

.histoire-description{
  display: flex;
  justify-content: space-around;
}

.card-histoire{
  border: 0.1px solid #f8c4be;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  padding: 25px 25px;
  background-color: #f8c4be;
}

.card-histoire, h3{
  text-align: center;
  color: black;
}

//////////////////// section 1 presentation histoire /////////////
.titre-histoire{
  text-align: center;
  margin-bottom: 3rem
}
.presentation-histoire{
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fde2df;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.caroussel-histoire{
  width: 29%;
}

.section-histoire-description{
  display: flex;
  flex-direction: column;
  align-self: center;
}

.livre-hisoire img{
  width: 350px;
  height: 500px;
  // width: 300px;
  // height: 430px;
}

.livre-hisoire{
 display: flex;
}
//////////////////////// section 2 histoire
//////////////////////// section 3 hisoire
.histoire-s6{
  display: flex;
  justify-content: space-between;
}

.section-histoire-description{
  width: 50%;
}


/***************************** MEDIA QUERI *****************************/

@media screen and (max-width: 997px){
  /////////////////////////////////// commun aux sections
  .histoire-description{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }

  .card-histoire{
    border: 0.1px solid #fcf9ce;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
    padding: 25px 25px;
   background-color: #f8c4be;
  }

  .histoire{
  margin-top: 5rem;
}
  ///////////////////////////////////////// section 1 
  .presentation-histoire{
    margin-top: 2rem;
  }

  .livre-hisoire img{
    width: 350px;
    height: 500px;
  }

  .livre-hisoire{
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

  }

  .card-histoire-s6{
    border: 0.1px solid #fcf9ce;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
    padding: 25px 25px;
    background-color: #f8c4be;
    align-self: center;
  }

  ///////////////////////// section 2 histore s4-s5
  .histoire-s6 {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
  }

  .section-histoire-description{
    width: auto;
  }
}

@media screen  and (max-width: 800px){
    .presentation-histoire{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    background: #fde2df;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .titre{
    font: 4rem;
  }

  .caroussel-histoire{
    width: 350px;
    margin-top: 3rem;
  }
}

@media screen and (max-width: 767px){
  /////////////////////////////////// commun aux sections
  .histoire-description{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }

  .card-histoire{
    background-color: #f8c4be;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 90%;
    padding: 25px 25px;
    background-color: #f8c4be;
  }

  .histoire{
  margin-top: 5rem;
}
  ///////////////////////////////////////// section 1 
  .presentation-histoire{
    margin-top: 2rem;
  }

  .livre-hisoire img{
    width: 350px;
    height: 500px;
  }

  .livre-hisoire{
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

  }

  ///////////////////////// section 2 histore s4-s5
  .histoire-s6 {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
  }

  .section-histoire-description{
    width: auto;
  }
}


@media screen and (max-width: 500px){
  /////////////////////////////////// commun aux sections
  .histoire-description{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }

  .card-histoire{
    background-color: #f8c4be;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    padding: 25px 25px;
    background-color: #f8c4be;
  }

  .histoire{
  margin-top: 5rem;
}
  ///////////////////////////////////////// section 1 
  .presentation-histoire{
    margin-top: 2rem;
  }

  .livre-hisoire img{
    width: 350px;
    height: 500px;
  }

  .livre-hisoire{
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

  }

  ///////////////////////// section 2 histore s4-s5
  .histoire-s6 {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
  }

  .section-histoire-description{
    width: auto;
  }
}
</style>