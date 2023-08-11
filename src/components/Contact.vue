<template>
    <section class="home-section" id="contats">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="_title mb-40">
                        <h2>Contacts</h2>
                    </div>
                </div>
                <div class="inverse">
                    <div class="col-sm-6">
                    <div class="contact-box elevated">
                        <h3 class="mb-2">Envoyer nous un message</h3>
                        <form class="_form">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group mt-10">
                                        <input 
                                            type="text"
                                            class="form-control"
                                            name="firstname"
                                            v-model="ghost.firstname"
                                            placeholder="Prénom"
                                        >
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group mt-10">
                                        <input 
                                            type="text"
                                            class="form-control"
                                            name="lastname"
                                            v-model="ghost.lastname"
                                            placeholder="Nom"
                                        >
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group mt-10">
                                        <input 
                                            type="text"
                                            class="form-control"
                                            name="email"
                                            v-model="ghost.email"
                                            placeholder="Email"
                                        >
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group mt-10">
                                        <input 
                                            type="text"
                                            class="form-control"
                                            name="phone"
                                            v-model="ghost.phone"
                                            placeholder="Téléphone"
                                        >
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group mt-10">
                                        <select 
                                            name="subject" 
                                            id="subject"
                                            class="form-control"
                                            v-model="ghost.subject"
                                        >
                                            <option value="">Sélectionner un sujet</option>
                                            <option value="Prise de contact">Prise de contact</option>
                                            <option value="Je veux souscrire à Cafo">Je veux souscrire à Cafo</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    cols="30" 
                                    rows="3"
                                    placeholder="Message"
                                    class="form-control"
                                    v-model="ghost.message"
                                ></textarea>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="box2">
                        <ul>
                            <li>
                                <i class="feather icon-map-pin mr-1"></i>
                                <span>France, Australie, Cameroun</span>
                            </li>
                            <li>
                                <a href="tel:+33644731154">
                                    <i class="feather icon-phone mr-1"></i>
                                    <span>+33644731154</span>
                                </a>                                
                            </li>
                            <li>
                                <a href="mailto:izytechgroup@gmail.com">
                                    <i class="feather icon-mail mr-1"></i>
                                    <span>izytechgroup@gmail.com</span>
                                </a>                                
                            </li>
                            <li>
                                <a href="#">
                                    <i class="feather icon-mail mr-1"></i>
                                    <span>www.cafo.com</span>
                                </a>                                
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
</section>   
</template>
<script>
    export default {
        name: 'ContactComponent',

        data: () => ({
            ghost: {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            }
        }),

        mounted () {
            this.resetGhost()
        },

        methods: {
           resetGhost () {
                this.ghost = {
                    firstname: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                }
           } 
        }
    }

</script>