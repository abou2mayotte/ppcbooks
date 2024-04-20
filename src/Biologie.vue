<template>
<!----------------section 1 presentation Biologie ----------------->
<section class="presentation-biologie">
    <div class="presentation-biologie-titre">
      <h1>Biologie</h1>
    </div>
    <div class="presentation-biologie-livre">
      <img src="./assets/images/biologie/couverture/bio.jpg" alt="livre de biologie">
    </div>
</section>
<!--------------------------section 2 ----------- ----------------->
<section class="s5-biologie container">
    <h2 class="titre-biologie">S5</h2>
    <div class="biologie-description">

        <div class="section-biologie-description ">       
            <p>
             <strong> Chapitres :</strong>
            </p>
              <div class="programme-s5-biologie">
                <p>
                  - L’évolution <br>
                  - L'hérédité des caractères <br>
                  - L'hérédité mendélienne <br>
                  - L'hérédité moléculaire

                </p>
                <p>
                    <strong>Disponible en :</strong> FR
                </p>
                <p>
                 <strong>Objectif:</strong> Étudier l'évolution des espèces et les mécanismes de l'hérédité.
                </p>
              </div>  
        </div>

        <div class="card-biologie">
            <h3>Thématiques</h3><br>

            <p>
               Théorie de Darwin, l'évolution, hérédité, sélection naturelle, biodiversité, chromosomes, caryotype, gène, allèle, méiose, fécondation, modèle de Mendel, dominance/codominance, arbre généalogique, hérédité moléculaire, ADN mutation.
            </p>
            <CarousselBio />    
        </div>
    
    </div>
</section>
</template>

<script setup lang="ts">
import CarousselBio from "@/components/CarousselBio.vue";

</script>

<style lang="scss" scoped>
h2{
  font-size: 7rem;
}
///////////////////////// section 1 presentation bio
.presentation-biologie{
  background: rgb(233, 253, 244);
  background-size: cover;
  width: 100%;
  background-position: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.presentation-biologie-livre img{
  width: 400px;
}

.presentation-biologie{
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/////////////////////////////// section 2 
.s5-biologie{
    margin-top: 5rem;
}

.titre-biologie{
    text-align: center;
    margin-bottom: 5rem;
}

.biologie-description{
  display: flex;
  justify-content: space-around; 
}

.section-biologie-description{
    display: flex;
    flex-direction: column;
    align-self: center;
}


.card-biologie{
  border: 0.1px solid #fcf9ce;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  padding: 25px 25px;
  background: rgb(233, 253, 244);
}

.card-biologie, h3{
  text-align: center;
}


/*************************** MEDIA QUERI *********************************/

@media screen and (max-width: 991px){
//////////////// Section Presentation Bio //////////////////
    .presentation-biologie-livre img{
        width: 425px;
    }

    .presentation-biologie {
    background: rgb(233, 253, 244);
    background-size: cover;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    } 

    h1{
      font-size: 3.5rem;
    }

    .presentation-biologie-livre{
      margin-top: 3rem;
    }

//////////////// Section 2 Bio///////////////////////////
    .s5-biologie{
        margin-top: 2.5rem;
    }

    .biologie-description{
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .card-biologie{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 85%;
    }

    .section-biologie-description{
        text-align: center;
    }
}

@media screen and (max-width: 700px){
//////////////// Section Presentation Bio //////////////////
    .presentation-biologie-livre img{
        width: 425px;
    }

    .presentation-biologie {
    background: rgb(233, 253, 244);
    background-size: cover;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    } 

    h1{
      font-size: 3.5rem;
    }

    .presentation-biologie-livre{
      margin-top: 3rem;
    }

//////////////// Section 2 Bio///////////////////////////
    .s5-biologie{
        margin-top: 2.5rem;
    }

    .biologie-description{
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .card-biologie{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    }


    .section-biologie-description{
        text-align: unset;
    }
}

@media screen and (max-width: 500px){
//////////////// Section Presentation Bio //////////////////
    .presentation-biologie-livre img{
        width: 425px;
    }

    .presentation-biologie {
    background: rgb(233, 253, 244);
    background-size: cover;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    } 

    h1{
      font-size: 3.5rem;
    }

    .presentation-biologie-livre{
      margin-top: 3rem;
    }

//////////////// Section 2 Bio///////////////////////////
    .s5-biologie{
        margin-top: 2.5rem;
    }

    .biologie-description{
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .card-biologie{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    }
}

@media screen and (max-width: 375px){
//////////////// Section Presentation Bio //////////////////
    .presentation-biologie-livre img{
        width: 350px;
    }

    .presentation-biologie {
    background: rgb(233, 253, 244);
    background-size: cover;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    } 

    h1{
      font-size: 3.5rem;
    }

    .presentation-biologie-livre{
      margin-top: 3rem;
    }

//////////////// Section 2 Bio///////////////////////////
    .s5-biologie{
        margin-top: 2.5rem;
    }

    .biologie-description{
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .card-biologie{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    }
}

@media screen and (max-width: 280px){
//////////////// Section Presentation Bio //////////////////
    .presentation-biologie-livre img{
        width: 275px;
    }

//////////////// Section 2 Bio///////////////////////////
    .biologie-description{
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .card-biologie{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 110%;
    }
}

</style>
