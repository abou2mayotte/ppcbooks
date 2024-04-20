<template>
  <section class="presentation-sci">
    <!-- <img src="./assets/images/sci/couverture/sci.jpg" alt="image de science" class="science"> -->
      <div class="titre">
        <h1>Sciences <br>intégrées</h1>
      </div>
      <div class="livre-sci">

        <!-- <input type="radio" name="slider" id="s1" checked> 
        <input type="radio" name="slider" id="s2" >
        <input type="radio" name="slider" id="s3" >

        <div class="cards">

          <label for="s1" id="slide1"></label>
          <label for="s2" id="slide2"></label>
          <label for="s3" id="slide3"></label>
          
          <div class="card">
            <div>
              <img src="./assets/images/sci/couverture/sci-s1-en.jpg" alt="livre de science">
            </div>

            <div>
              <img src="./assets/images/sci/couverture/sci-s2-en.jpg" alt="livre de science">
            </div>

            <div>
              <img src="./assets/images/sci/couverture/sci-s3-en.jpg" alt="livre de science">
            </div>
          </div>
        </div> -->

        <!-- <img src="./assets/images/sci/couverture/sci-s1-en.jpg" alt="livre de science" class="livre-1">
        <img src="./assets/images/sci/couverture/sci-s2-en.jpg" alt="livre de science" class="livre-2">
        <img src="./assets/images/sci/couverture/sci-s3-en.jpg" alt="livre de science" class="livre-3"> -->

      </div>
      <div class="caroussel-sci">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="./assets/images/sci/couverture/sci-s1-en.jpg" alt="First slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="./assets/images/sci/couverture/sci-s2-en.jpg" alt="livre de science">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="./assets/images/sci/couverture/sci-s3-en.jpg" alt="livre de science">
            </div>
          </div>
      </div>
      </div>
      
   
  </section>

<!--------------- section 2  S1 --------------->
  <section class="premiere-annee section-science container">       
        <div class="section-science-description"> 
          <h2 class="titre-sci-s1">S1</h2> 
        <p><strong>Chapitres:</strong><br>
          -Le laboratoire des sciences<br>
          -L’alimentation, cuisine et nutrition<br>
          -Le Sports<br>
          -Puberté et sexualité<br>
        </p>
        <p>
         <strong>Disponible en :</strong>
          FR, EN, DE, IT, ES
        </p>
        </div>

        <div class="card-sci-s1">
          <h3> Thématiques</h3>
          <p>
            Mesures/unités, alimentation, acide, chaleur, 
            sel, fermentation, nutrition, mouvement, forces, 
            respiration, sport, santé, anatomie, sexualité etc...
          </p>  
      
      <Caroussel />
   
  </div>
    
    
  </section>

<!--------------- Section 3 S2 --------------->
  <section class="deuxieme-annee mt-20 section-science container">
    <div class="card-sci-s1 card-s2">
        <h3> Thématiques</h3>
        <p>
          Système solaire, la vie sur terre, atomes, vie, maladie
          infectieuse, maladie non infectieuse, addiction, tabagisme, vue, 
          l'ouïe, le toucher l'odorat, le goût, la proprioception, introspection etc...
        </p> 
        <CarousselModal />
    </div>


    <div class="section-science-description">
      <h2 class="titre-h2">S2</h2>
      <p>
        <strong>Chapitres:</strong>
      </p>
      <p>
        -Notre place dans l’univers<br>
        -Un esprit sain dans un corps sain<br>
        -Les sens
      </p>

        <p>
           <strong>Disponible en :</strong> FR, EN, DE, ES
        </p>
        
        
    </div>
  </section>

<!--------------- Section 4 S3 --------------->
  <section class="troisieme-annee section-science container">
    <div class="section-science-description">
      <h2 class="titre-h2">S3</h2>
      <p>
        <strong>Chapitres : </strong>
      </p>
      <p>
        - Les machines et leur fonctionnement : les forces, l’énergie, l’électrostatique, les circuits électriques, le magnétisme…<br>
        - Notre terre vivante : nutrition et environnement, écosystème, classification des espèces…<br>
      </p>
      <p>
        <strong>Disponible en :</strong> FR, EN, DE, ES
      </p>
      
    </div>

    <div class="card-sci-s1 card-s3">
        <h3>Thématiques</h3>
        <p>
         Force, énergie, électrostatique, circuits électriques, magnétisme, robotique, écosystème, classification, écologie etc...
        </p> 
       
        <CarousselModalSci />
    </div>
  </section>
</template>

<script setup lang="ts">
import Caroussel from '@/components/CarousselModal/Caroussel.vue';
import CarousselModalSci from '@/components/CarousselModal/CarousselModalSci.vue';  
import CarousselModal from '@/components/CarousselModal/CarousselModal.vue';
</script>



<style scoped lang="scss">
//////////////////// commun a toute les sections ///////////
.titre-h2{
  margin-bottom: 1rem;
}

h2{
  font-size: 7rem;
}

.section-science{
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  
}

.section-science-description{
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: center;
}

.card-sci-s1{
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  padding: 25px 25px;
  background-color: #b8936a8e;
}



.card-sci-s1, h3{
  text-align: center;
  color: black;
}

.section-science{
  margin-top: 12rem;
}

//////////////////// section 1 presentation-sci //////////////


.caroussel-sci{
  width: 29%;
}

.presentation-sci{
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f8dfc18e;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.livre-sci img{
 width: 330px;
 height: 350px;
}


.cards{
  position: relative;
  height: 500px;
  width: 430px;
  perspective: 1000px;
  transform-style: preserve-3d;
}

.cards label{
  position: absolute;
  width: 430px;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
  transition: transform 0.55s ease;
}

.cards .card{
  position:relative;
  height: 100%;
  background: black;
  border: radius 10px;
  padding: 30px 35px;
}

.cards img{
  border-radius: 5px;
  box-shadow: 15px 15px 15px 40px rgba(0, 0, 0, 50%);
  height: 220px;
  object-fit: cover;
  transition: all 0.7s;
}



/**************************** MEDIA QUERIE *******************************/
/////////////////////////////////////// commun a toute les sections 
  @media screen and (max-width: 991px){
   
   .section-science{
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
   } 

   .card-sci-s1 {
    border: 0.1px solid #b8936a8e;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 75%;
    padding: 25px 25px;
    background-color: #b8936a8e;
   }
    
  .section-science-description{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-self: center;
  }



/////////////////////////////////////// section 1 presentation sci
 .livre-sci{
   display: flex;
   flex-direction: column;
 }

  h1{
    font-size: 5rem;
    text-align: center;
  }

////////////////////////////////////////////// section 2 sci s2
  .deuxieme-annee{
    display: flex;
    flex-direction: column-reverse;
  }

}

@media screen  and (max-width: 800px){
    .presentation-sci{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    background: #f8dfc18e;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .titre{
    font: 4rem;
  }

  .caroussel-sci{
    width: 350px;
    margin-top: 3rem;
  }
}

 @media screen and (max-width: 767px){
   
   .section-science{
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
   } 

   .card-sci-s1 {
    border: 0.1px solid #b8936a8e;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    padding: 25px 25px;
    background-color: #b8936a8e;
   }
    
  .section-science-description{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-self: center;
  }

  .section-science{
    margin-top: 5rem;
  } 

/////////////////////////////////////// section 1 presentation sci
 .livre-sci{
   display: flex;
   flex-direction: column;
 }

  h1{
    font-size: 5rem;
    text-align: center;
  }

////////////////////////////////////////////// section 2 sci s2
  .deuxieme-annee{
    display: flex;
    flex-direction: column-reverse;
  }

}
 
 @media screen and (max-width: 500px){
   
   .section-science{
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
   } 

   .card-sci-s1 {
    border: 0.1px solid #b8936a8e;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    padding: 25px 25px;
    background-color: #b8936a8e;
   }
    
  .section-science-description{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-self: center;
  }



/////////////////////////////////////// section 1 presentation sci
 .livre-sci{
   display: flex;
   flex-direction: column;
 }

  h1{
    font-size: 5rem;
    text-align: center;
  }

////////////////////////////////////////////// section 2 sci s2
  .deuxieme-annee{
    display: flex;
    flex-direction: column-reverse;
  }

}
 
 @media screen and (max-width: 375px){

   .section-science{
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
   } 

   .card-sci-s1 {
    border: 0.1px solid #b8936a8e;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    padding: 25px 25px;
    background-color: #b8936a8e;
   }
    
  .section-science-description{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-self: center;
  }

/////////////////////////////////////// section 1 presentation sci
 .livre-sci{
   display: flex;
   flex-direction: column;
 }

  h1{
    font-size: 5rem;
    text-align: center;
  }

////////////////////////////////////////////// section 2 sci s2
  .deuxieme-annee{
    display: flex;
    flex-direction: column-reverse;
  }

}
</style>
