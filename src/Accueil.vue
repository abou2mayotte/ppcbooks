<template>
  <header>
    <div>
      <!-- <img src="./assets/images/accueil/accueil-ppc.jpeg" alt=""> -->
    </div>

    <!-- <div class="description-image-accueil">
        <h1>
          Bienvenue
        </h1>
      </div> -->
  </header>
<!--------------- Section 1 --------------->
  <section class="section-1">
    <div class="description-site">
      <div class="description desciption-nos-livres">
        <h2>Nos livres</h2>
        <p class="description-paragraphe ">
          Découvrez nos productions collaboratives pour le primaire et le 
          secondaire. Réalisées par des enseignants/enseignantes situés dans toute l’Europe, 
          ces productions sont adaptées aux exigences linguistiques des programmes européens et internationaux.
        </p>
      </div>
      
      <div class="description desciption-collaboration">
        <h2>Collaboration</h2>
        <p class="description-paragraphe">
          Fruit d’une collaboration d’enseignants passionnés
          et dévoués, ces livres veulent offrir aux élèves et aux enseignants 
          des outils adaptés à leur pédagogie.
        </p>
      </div>
    </div>
  </section>
<!--------------- Section 2 pédagogie --------------->
  <section class="pedagogie">
    <div class="description">
        <h2>Pédagogie</h2>
        <p class="description-paragraphe desciption-pedagogie">
          Issu d’une pédagogie stimulante, fondé sur la découverte et l’enquête, 
          le riche catalogue de documents permet aux élèves de construire leur propre
           savoir.
        </p>
    </div>

    <div class="texte-img-img">
          <img
            src="./assets/images/accueil/sch-s1-07.jpg"
            alt=""
            class="pedagogie-img-une"
          />
          <img
            src="./assets/images/accueil/sch-s1-08.jpg"
            alt=""
            class="pedagogie-img-deux"
          />
          <img
            src="./assets/images/accueil/sci-s3-005.jpg"
            alt=""
            class="pedagogie-img-trois"
          />
    </div>
  </section>
<!--------------- section 3 Nos derniere nouveauté --------------->
  <section class="sixieme-section">
      <h2>Notre dernière nouveauté</h2>
      <div class="derniere-nouveaute">
        <!-- math -->
        <!-- <div class="derniere-nouveaute-math">
          <h3>Mathématique</h3>
          <!-- <div class="livre-math">
            <img
              src="./assets/images/accueil/math-s3.jpeg"
              alt=""
            />
          </div> -->
          <!--
          <p>
            Nous offrons notre tout premier ouvrage de mathématiques à
            destination des 3ème année secondaire (FR). Les élèves pourront
            pratiquer des exercices avec des niveaux variés. Des activités
            introduisent chaque chapitre afin de stimuler et engager leur
            compréhension.
          </p>
        </div> -->
        <!-- primaire -->
        <div class="derniere-nouveaute-primaire">
          <h3 class="titre-biologie">Biologie</h3>
          <!-- <div class="livre-primaire">
            <img
              src="./assets/images/accueil/p1-fr-1.jpg"
              alt=""
              class="primaire-image-p1"
            />
            <img
              src="./assets/images/accueil/p2-en-1.jpg"
              alt=""
              class="primaire-image-p2"
            />
          </div> -->
          <p>
            Nos dernières éditions portent sur le livre de S4 Biologie EN et FR ! 
            Disponible en septembre 2024 en français et en anglais, ce manuel vous 
            accompagnera tout au long de l’année. Basé sur la pédagogie de la découverte, il propose 
            des expériences originales pour une immersion scientifique complète. Élèves et enseignants, 
            plongez dans le savoir !
            <br>
          </p>
        </div>
      </div>
  </section>

</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
///////////////////// reset
h2{
  font-size: 4rem;
}
//////////////////// header
header{
  background-image: linear-gradient(rgba(0, 0, 0, 0.395), rgba(0, 0, 0, 0.395)),
  url(./assets/images/accueil/accueil-ppc.jpeg);  
  background-size: cover;
  width: 100%;
  height: 92vh;
  background-position: center;
}

.description-image-accueil {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // height: 30vh;
}

.description-image-accueil {
  animation: reveal 1.5s;
}

@keyframes reveal {
  from {
    transform: translateY(70%);
  }
  to {
    opacity: 0.5;
    transform: none;
  }
}

//////////////////// section 1 Nos livres
.section-1{
  margin-top: 4rem;  
  // height: 20vh;
}
.description-site{
 display: flex;
 justify-content: space-around;
}
.description h2{
  text-align: center;
  margin-bottom: 1rem;
}

.description{
 width: 30%;
}



.description-paragraphe{
  text-align: justify;
  text-align: center; 
}
//////////////////// section 2 Pédagogie

.pedagogie{
display: flex;
justify-content: space-around;
margin-top: 4rem;
background: #f5f4f1;
padding:9.5rem 20px;
}

// .troisieme-section {
//   background: #fef2f4;
//   padding-top: 5rem;
//   padding-bottom: 5rem;
// }

.texte-img-img {
  width: 33%;
  padding-top:1rem;
}

.texte-img-img img{
  // width: 250px;
}


.texte-img-texte {
  width: 30rem;
  text-align: justify;
}

.texte-img {
  display: flex;
  justify-content: space-around;
}

.texte-img-img img {
  width: 90px;
  transform: perspective(31px) translate3d(5px, 20px, 20px);
}

.pedagogie-img-une {
  padding-bottom: 5rem;
}

.pedagogie-img-deux {
  padding-bottom: 3rem;
}

.pedagogie-img-trois {
  padding-bottom: 1rem;
}

.texte-img-texte h2 {
  display: flex;
  /* align-self: flex-start; */
  padding-bottom: 1rem;
  font-size: 4rem;
  letter-spacing: -0.015em;
}


//////////////////// section 3 Nos derniere nouveauté
.sixieme-section {
  margin-top: 5.5rem;
}
.sixieme-section h2 {
  text-align: center;
}
.sixieme-section h3 {
  padding-top: 2rem;
  text-align: center;
  font-size: 2rem;
}

.derniere-nouveaute-math {
  width: 450px;
  height: 370px;
  background: #f5f5f5;
  border-radius: 50px;
}

.derniere-nouveaute-primaire {
  width: 450px;
  height: 370px;
  background: #f5f5f5;
  border-radius: 50px;
}

.derniere-nouveaute {
  display: flex;
  justify-content: space-around;
  margin-top: 4rem;
}

.derniere-nouveaute-math img {
  width: 350px;
}

.titre-biologie{
  font-size: 4rem;
}

/* math */
.livre-math {
  display: flex;
  justify-content: center;
}

.livre-math img{
  width: 150px;
}

.livre-math,
p {
  margin-top: 2.5rem;
  padding-left: 1.5rem;
  padding-right: 1rem;
  text-align: center
}

/* primaire */

.livre-primaire {
  display: flex;
  justify-content: center;
}

.livre-primaire img {
  width: 185px;
}

.primaire-image-p1 {
  transform: rotate(-10deg);
}

.primaire-image-p2 {
  transform: rotate(10deg);
}

.derniere-nouveaute-primaire p {
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: justify;
}

.livre-primaire,
p {
  margin-top: 2rem;
}

/************************* Media Queries **********************/
@media screen and (max-width: 1125px){
//////////////////// section 1 Nos livres
  h2{
  font-size: 2.5rem;
  }

  .desciption-nos-livres,
  .desciption-collaboration{
    width: 80%;
  }

}

@media screen and (max-width: 930px){
  //////////////////// section 3 Nos Dernieres nouveautés
  .derniere-nouveaute {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 4rem;
    flex-direction: column;
  }

  .derniere-nouveaute-primaire {
    margin-top: 2rem;
    
  }
}


@media screen and (max-width: 900px){
  //////////////////// section 2 pedagogie
  .texte-img-img img {
    width: 80px;
    transform: perspective(41px) translate3d(5px, 20px, 20px);
  }

  // .description-paragraphe {
  //   widows: 50%;
  // }

}


@media screen and (max-width: 770px){
  //////////////////// section 2 pedagogie
  .pedagogie{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4.5rem 2rem 12rem 2rem;
  }
  
  .pedagogie-img-trois {
    padding-bottom: 2rem;
  }

  
  .texte-img-img img {
    width: 60px;
    transform: perspective(37px) translate3d(5px, 50px, 24px);
  }
  // .desciption {
  //   width: 75%;
  // }

  .description {
    width: 60%;
  }

}

@media screen and (min-width: 501px) and (max-width:609px){
    .texte-img-img img {
      width: 47px;
      transform: perspective(33px) translate3d(5px, 48px, 24px);
  }
}

@media screen and (max-width: 500px){

  //////////////////// section 1
  .description-site{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

  }

  .description{
    width: 100%;
  }

  .desciption-collaboration{
    margin-top: 2rem
  }

  //////////////////// section 2 pedagogie
  .pedagogie{
    display: flex;
    flex-direction: column;
    align-items: center;
    // height: 75vh;
    padding: 3rem 56px;
  }

  .texte-img-img img {
    width: 100px;
    transform: perspective(51px) translate3d(5px, 20px, 20px);
  }

  .texte-img-img {
    width: 100%;
    padding-top: 5rem;
  }

  ////////////////////section 3 dernieres nouveauté 

  .derniere-nouveaute-math{
    width: 400px;
    height: 370px;
    background: #f5f5f5;
    border-radius: 50px;
  }

  .derniere-nouveaute-primaire{
    width: 400px;
    height: 330px;
    background: #f5f5f5;
    border-radius: 50px;
  }
  
}


@media screen and (max-width: 395px){
//////////////////// section 2 pedagogie
  .pedagogie{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 3rem 56px;
    padding: 3rem 0 10rem 0;
  }

  .desciption-pedagogie{
    width: 100%;
  }

  .texte-img-img img {
    width: 50px;
    transform: perspective(71px) translate3d(26px, 37px, 53px);
  }

  .texte-img-img {
    width: 90%;
    padding-top: 5rem;
  }
  ////////////////////section 3 dernieres nouveauté 

  .derniere-nouveaute-math{
    width: 360px;
    height: 330px;
    background: #f5f5f5;
    border-radius: 50px;
  }

  .derniere-nouveaute-primaire{
    width: 360px;
    height: 390px;
    background: #f5f5f5;
    border-radius: 50px;
  }
}

</style>