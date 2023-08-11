<template>
    <section class="home-section" id="faq">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="col-sm-12">
                        <div class="_title mb-40">
                            <h2>FAQ</h2>
                        </div>
                </div>
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="clearfix">
                                    <a class="btn-collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne" @click="displayFaq()">Question 1 ?
                                    <i class="feather icon-chevron-up" v-show="tout"></i>
                                    <i class="feather icon-chevron-down" v-show="!tout"></i></a>
                                </h2>
                            </div>
                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas laudantium, 
                                    accusamus quos facere voluptates labore. 
                                    Eaque perspiciatis incidunt earum non placeat nulla deserunt! Magni possimus commodi ea, 
                                    facilis culpa itaque voluptates maiores! Aperiam ad consectetur non accusantium atque perferendis
                                    adipisci aspernatur harum aliquam eveniet, sed esse quae ab quia quis quaerat totam enim quidem delectus 
                                    reprehenderit nulla. Laudantium unde, suscipit consequatur nobis, qui quia aut voluptas eius quis repellendus, ut facilis possimus at nulla rem? 
                                    Totam dolorum voluptates unde dolore pariatur perspiciatis! Ipsa, eaque, tempore aspernatur nihil aliquid libero minima maxime nisi sit voluptate dolor eveniet sint exercitationem, 
                                    optio tempora.</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="clearfix">
                                    <a class="btn-collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true"
                                    aria-controls="collapseTwo" @click="displayFaq1()">Question 2 ?
                                    <i class="feather icon-chevron-up" v-show="tout1"></i>
                                    <i class="feather icon-chevron-down" v-show="!tout1"></i></a>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas laudantium, 
                                    accusamus quos facere voluptates labore. 
                                    Eaque perspiciatis incidunt earum non placeat nulla deserunt! Magni possimus commodi ea, 
                                    facilis culpa itaque voluptates maiores! Aperiam ad consectetur non accusantium atque perferendis
                                    adipisci aspernatur harum aliquam eveniet, sed esse quae ab quia quis quaerat totam enim quidem delectus 
                                    reprehenderit nulla. Laudantium unde, suscipit consequatur nobis, qui quia aut voluptas eius quis repellendus, ut facilis possimus at nulla rem? 
                                    Totam dolorum voluptates unde dolore pariatur perspiciatis! Ipsa, eaque, tempore aspernatur nihil aliquid libero minima maxime nisi sit voluptate dolor eveniet sint exercitationem, 
                                    optio tempora.</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h2 class="clearfix">
                                    <a class="btn-collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true"
                                    aria-controls="collapseThree" @click="displayFaq2()">Question 3 ?
                                    <i class="feather icon-chevron-up" v-show="tout2"></i>
                                    <i class="feather icon-chevron-down" v-show="!tout2"></i></a>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas laudantium, 
                                    accusamus quos facere voluptates labore. 
                                    Eaque perspiciatis incidunt earum non placeat nulla deserunt! Magni possimus commodi ea, 
                                    facilis culpa itaque voluptates maiores! Aperiam ad consectetur non accusantium atque perferendis
                                    adipisci aspernatur harum aliquam eveniet, sed esse quae ab quia quis quaerat totam enim quidem delectus 
                                    reprehenderit nulla. Laudantium unde, suscipit consequatur nobis, qui quia aut voluptas eius quis repellendus, ut facilis possimus at nulla rem? 
                                    Totam dolorum voluptates unde dolore pariatur perspiciatis! Ipsa, eaque, tempore aspernatur nihil aliquid libero minima maxime nisi sit voluptate dolor eveniet sint exercitationem, 
                                    optio tempora.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'FaqComponent',

        data: () => ({
            tout: false,
            tout1: false,
            tout2: false,
        }),

        mounted () {
            this.tout = false
            this.tout1 = false
            this.tout2 = false
            
        },
        methods: {
            displayFaq () {
                this.tout = !this.tout
                this.tout1 = false
                this.tout2 = false
            },
            displayFaq1 () {
                this.tout = false
                this.tout1 = !this.tout1
                this.tout2 = false
            },
            displayFaq2 () {
                this.tout = false
                this.tout1 = false
                this.tout2 = !this.tout2
            }
        }
    }
</script>