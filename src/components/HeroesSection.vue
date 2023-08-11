<template>
    <div class="hsection" :style="`background-image: url(${bgHero});`" id="hero">
        <div class="slogan">
            <h1>Piloter vos equipes et partenaires en temps réel</h1>
            <p>Fournir aux managers des indicateurs efficaces de développement du CA: couverture, croissance du porte-feuilles, distribution, suivi  CRM.</p>
            <div class="button mt-20">
                <ul>
                    <li class="mr-4">
                        <button class="btn btn-primary-outline" href="#">Voir la démo</button>
                    </li>
                    <li>
                        <button class="btn btn-secondary-outline" href="#">Tester</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import bgHero  from '@/assets/bg-hero.png'
    import googleplaylogo  from '@/assets/googleplaylogo.png'

    export default {
        name: 'HeroesSectionComponent',
        data: () => ({
            bgHero,
            googleplaylogo, 
        }),

    }
    
</script>