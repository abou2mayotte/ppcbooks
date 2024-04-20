<template>
<!-------------------- section 1  -------------------->
  <section class="presentation-math">
    <!-- <img src="./assets/images/mathematique/couverture/science.jpg" alt=""> -->
    <div class="presentation-math-titre">
      <h1>Mathématiques</h1>
    </div>
    <div class="presentation-math-livre">
      <img src="./assets/images/accueil/math-1.jpg" alt="">
    </div>
  </section>
  <!-------------------- section 2  -------------------->
  <section class="section-math container">
    <h2 class="titre-math-s3">S3</h2>
      <div class="math-description">

        <div class="section-math-description">       
              <p><strong>Chapitres :</strong></p>
           
            
              <div class="programe-math-s3">
                <p>
                  -Opération sur les décimaux <br>
                  -Fractions et pourcentages <br>
                  -Puissance <br>
                  -Racine carrés -Calcul littéral -Équations <br>
                  -Fonction affine et proportionnalité <br>
                  -Statistique <br>
                  - Angle <br>
                  -Transformation du plan : aire et volume <br>
                  -Rapport dans les triangles rectangles
                </p>
              </div> 

              <!-- <div> -->
                <p>
                  <strong>Disponible en :</strong> FR
                </p>
              <!-- </div>  -->

              <!-- <div class="objectif"> -->
                <p class="objectif">
                  <strong>  Objectif:</strong><br>
                  Démontrer une solide compréhension des principes mathématiques et de tirer des conclusions à la fois complètes et pertinentes à partir des données analysées.
                </p>
              <!-- </div> -->
        </div>

        <div class="card-math-s3">
            <h3>Thématiques</h3>
            <p>
             Nombre relatif, nombre fractionnaire, proportionnalité pourcentages, double distributivité, équation, principe multiplicatif, proportionnalité inverse, symétrie centrale, translation, prisme droit, cylindre, pyramide, sphère de rayon cône de révolution, rotation...
            </p>
            
            <p>
              Exercices avec différents niveaux de difficulté          
            </p>
            <CarousselMath />
        </div>
    
      </div>

  </section>
  <!-------------------- section 3  -------------------->
  <section></section>

</template>

<script setup lang="ts">
import CarousselMath from '@/components/CarousselMath.vue'
</script>
  
<style scoped lang="scss">

///////////////////////// section 1 presentation math
.presentation-math{
  background: rgb(233, 233, 253);
  background-size: cover;
  width: 100%;
  background-position: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.presentation-math{
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.presentation-math-titre{
  display: flex;
  // align-self: center;
}

.presentation-math-livre img{
  width: 350px;
}

///////////////////////// section 2 // math
.section-math{
  margin-top: 5rem;
}
.card-math-s3, h3{
  text-align: center;
  color: black;
}

.titre-math-s3{
  text-align: center;
  margin-bottom: 2.2rem;
  text-align: center;
  font-size: 7rem;
}



.math-description{
  display: flex;
  justify-content: space-between;
}

.card-math-s3{
  border: 0.1px solid rgb(233, 233, 253);
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 25px 25px; 
  background-color: rgb(233, 233, 253);
  width: 75%;

}

.objectif{
  width: 50%;
  text-align: justify;
}




/***************************** MEDIA QUERI *****************************/
@media screen and (max-width: 1100px){
   .presentation-math {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
}

@media screen and (max-width: 991px){
    //////////////////////// section 1 //////////////////////
    .presentation-math {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    } 

    h1{
      font-size: 3.5rem;
    }

    h4{ 
      margin-bottom: 2rem;
    }

    .presentation-math-livre{
      margin-top: 3rem;
    }
  //////////////////////// section 2 //////////////////////
  .section-math-description{
    text-align: center;
  }

  .objectif {
  width: auto;
  text-align: center;
}

  .titre-math-s3 {
    text-align: center;
    margin-bottom: 2.2rem;
    font-size: 6rem;
  }
  .math-description{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card-math-s3 {
    border: 0.1px solid rgb(233, 233, 253);
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 25px 25px;
    background-color: rgb(233, 233, 253);
    width: 100%;
    margin-top: 2rem;
  }

  .objectif{
    text-align: center;
  }
}

@media screen and (max-width: 700px){
    //////////////////////// section 1 //////////////////////
    .presentation-math {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    } 

    h1{
      font-size: 3.5rem;
    }

    h4{ 
      margin-bottom: 2rem;
    }

    .presentation-math-livre{
      margin-top: 3rem;
    }
  //////////////////////// section 2 //////////////////////
  .section-math-description, .objectif{
    text-align: unset;
  }
  .titre-math-s3 {
    text-align: center;
    margin-bottom: 2.2rem;
    font-size: 6rem;
  }
  .math-description{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card-math-s3 {
    border: 0.1px solid rgb(233, 233, 253);
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 25px 25px;
    background-color: rgb(233, 233, 253);
    width: 100%;
    margin-top: 2rem;
  }

  .objectif{
    width: auto;
    text-align: justify;
  }
}

@media screen and (max-width: 500px){
    //////////////////////// section 1 //////////////////////
    .presentation-math {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    } 

    h1{
      font-size: 3.5rem;
    }

    .presentation-math-livre{
      margin-top: 3rem;
    }
  //////////////////////// section 2 //////////////////////
  .titre-math-s3 {
    text-align: center;
    margin-bottom: 2.2rem;
    font-size: 6rem;
  }
  .math-description{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card-math-s3 {
    border: 0.1px solid rgb(233, 233, 253);
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 25px 25px;
    background-color: rgb(233, 233, 253);
    width: 100%;
    margin-top: 2rem;
  }

  .objectif{
    width: auto;
    text-align: justify;
  }
}
</style>
