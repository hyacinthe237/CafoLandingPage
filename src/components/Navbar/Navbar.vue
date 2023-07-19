<template>
    <header>
        <div class="banner">
        </div>
        <nav class="navbar navbar-expand-lg navbar-light" id="navbar_top">
            <div class="container">
                <a  href="#" 
                    class="navbar-brand"
                >
                <img :src="logo" 
                      class="CAFO"
                >
                    </a>
                        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                <div   
                    class="collapse navbar-collapse" 
                    id="navbarSupportedContent"
                >
                    <ul 
                        class="navbar-nav ml-auto"
                    >
                        <li 
                            class="nav-item active"
                        >
                            <a 
                                class="nav-link" 
                                href="#"
                            >Accueil
                                <span 
                                    class="sr-only">(current)
                                </span>
                            </a>
                        </li>
                        <li 
                            class="nav-item dropdown"
                        >
                            <a 
                                class="nav-link dropdown-toggle" 
                                role="button" href="#"
                                data-bs-toggle="collapse" 
                                aria-expanded="false"
                            >Services</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a 
                                class="nav-link dropdown-toggle" 
                                href="#" role="button" button 
                                data-bs-toggle="collapse" 
                                aria-expanded="false"
                            >
                                Fonctionnalités</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link"
                                href="#"
                             >
                                Tarifications</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" 
                                href="#"
                            >
                                Contacts</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#">Faq</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mr-2">
                            <button class="btn btn-primary-outline" href="#">Voir la démo</button>
                        </li>
                        <li class="nav-item ">
                            <button class="btn btn-secondary-outline" href="#">Tester</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    import logo from '@/assets/CAFO.jpg'

    export default {
        name: 'NavbarComponent',

        data: () => ({
            logo
        }),

        mounted () {
            this.initScroll()
            window.$(document).ready(function() {
                window.$('.dropdown').hover(function() {
                    window.$(this).addClass('show');
                    window.$(this).find('.dropdown-menu').addClass('show');
                }, function() {
                    window.$(this).removeClass('show');
                    window.$(this).find('.dropdown-menu').removeClass('show');
                });
            });
        },
        methods: {
            initScroll () {
                document.addEventListener("DOMContentLoaded", function(){
                    window.addEventListener('scroll', function() {
                        if (window.scrollY > 50) {
                            document.getElementById('navbar_top').classList.add('fixed-top');
                                    // add padding top to show content behind navbar
                            var navbar_height = document.querySelector('.navbar').offsetHeight;
                            document.body.style.paddingTop = navbar_height + 'px';
                        } else {
                            document.getElementById('navbar_top').classList.remove('fixed-top');
                            // remove padding top from body
                            document.body.style.paddingTop = '0';
                        } 
                    });
                }); 
            }
        },

    //     function: myFunction () {
    //         var x = document.getElementById("navbarSupportedContent");
    //         if (x.className === "collapse navbar-collapse") {
    //         x.className += " responsive";
    //       } else {
    //      x.className = "collapse navbar-collapse";
    //         }
    //     }
    }
</script>