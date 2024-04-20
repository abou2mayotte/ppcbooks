<script setup lang="ts">
const iconMobile = document.querySelector(".icone-menu");
const navbar = document.querySelector(".navbar");
let isMenuOpen = false;
let mobileMenuDom;

const closeMenu = () => {
    mobileMenuDom.classList.remove("open");
};


const createMobileMenu = () => {
    mobileMenuDom = document.createElement("div");
    mobileMenuDom.classList.add("mobile-menu");
    mobileMenuDom.addEventListener("click", (event) => {
        event.stopPropagation();
    });
    mobileMenuDom.append(navbar.querySelector('ul').cloneNode(true));
    navbar.append(mobileMenuDom);
};

const openMenu = () => {
    if(mobileMenuDom){

    }else{
        createMobileMenu();
    }
    mobileMenuDom.classList.add("open");    
};

const toggleMobileMenu = e => {
    if (isMenuOpen){
        closeMenu();
    }else{
        openMenu();
    }
    isMenuOpen = !isMenuOpen; 
}

iconMobile.addEventListener("click",(event) => {
    event.stopPropagation();
    toggleMobileMenu();
});

window.addEventListener('click', () => {
    if (isMenuOpen){
        toggleMobileMenu();
    }
});

window.addEventListener("resize", (e) => {
    console.log(e);
    if (window.innerWidth > 983 && isMenuOpen) {
        toggleMobileMenu();
    }
});
</script>