<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="logo">
        <a class="navbar-brand" href="#">PPC</a>
      </div>
    
      <button class="navbar-toggler shadow-none border-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav ml-auto">

          <li class="nav-item">
            <router-link to="/Accueil" class="mr-20">Accueil</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/Sci" class="mr-20">SCI</router-link>
          </li>

          
          <li class="nav-item">
            <router-link to="/Sch" class="mr-20">SCH</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/histoire" class="mr-20">Histoire</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/Geographie" class="mr-20">Géographie</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/Mathematique" class="mr-20">Mathématiques</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/Biologie" class="mr-20">Biologie </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/Primaire" class="mr-20">Primaire</router-link>  
          </li>

          <li class="nav-item">
            <router-link to="/Commande" class="mr-20">Commande</router-link>  
          </li>

          <li class="nav-item">
            <router-link to="/QuiSommesNous" class="mr-20">Qui sommes-nous ?</router-link>  
          </li>

          <li class="nav-item">
            <router-link to="/VersionPapNum" class="mr-20">Version papier vs Version numérique</router-link>  
          </li>

        </ul>
      </div>
  </nav>
   <div>
      <router-view></router-view>
   </div>

   <footer>
     <p class="copyrigth">
       &#9400; Copyright PPC
     </p>
     <p>
       <strong>contact:</strong>ppc.livres@gmail.com
     </p>
   </footer>
</template>

<script setup lang="ts">
</script>


<style lang="scss">
@import './assets/scss/base.scss';
nav {
  /*background-color: #606060;
  display:flex;
  justify-content: space-around;
  
  ul{
    list-style-type: none;
    display: flex;
    // line-height: 3.6rem;

  }*/

  // a {
    
  // }
}

// @media screen and (min-width: 983px) {
//   .mobile-menu {
//     display: none;
//   }
// }

// @media screen and (max-width: 983px) {
//   .navbar-ul {
//     display: none;
//   }
//   .icone-menu {
//     /* Ont fait réapparaître l'icône burguer lorsque l'écran est réduit */
//     display: block;
//     margin-top: 1.45rem;
//     position: absolute;
//     right: 0;
//     margin-right: 2rem;
//     font-size: 2rem;
//     color: rgb(34, 102, 133);
//   }

//   .mobile-menu {
//     display: none;
//     position: absolute;
//     top: 6.3rem;
//     right: 0;
//     padding: 3rem 2rem;
//     background: #f5f5f5;
//     width: 15rem;
//     height: 100vh;
//     border-left: 1px solid rgba(163, 130, 130, 0.178);
//   }
//   .mobile-menu ul {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     margin-top: 2rem;
//   }
//   .mobile-menu li {
//     margin: -1.7rem;
//     padding-top: 5px;
//     margin-left: 1.8rem;
//     margin-top: 10px;
//   }

//   .mobile-menu li a {
//     text-decoration: none;
//     color: black;
//     text-decoration: none;
//   }

//   .mobile-menu.open {
//     display: block;
//   }

//   .titre {
//     display: block;
//     margin-right: 1.2rem;
//   }
// }

// .nav-menu{
//   display: flex;
//   justify-content: flex-end;
// }

.navbar-brand{
  font-size: 2rem;
}

footer{
  width: 100%;
  background: rgb(240, 240, 240);
  height: 90px;
  margin-top: 5rem;
  display: flex;
  justify-content: center;  
  align-items: center;
  flex-direction: column;
}

footer p{
  text-align: center;
}

.copyrigth{
  margin-bottom: 0rem;
}

</style>
