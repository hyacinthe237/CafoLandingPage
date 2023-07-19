<template>
    <div class="Hsection">
        <div class="logoStore">
            <a href="#"><img :src="googleplaylogo"></a>
        </div>
    </div>
</template>
<script>
     import Section  from '@/assets/Section.psd'
    import googleplaylogo  from '@/assets/googleplaylogo.png'

    export default {
       
        name: 'HeroesSectionComponent',
        data: () => ({
            Section,
            googleplaylogo, 
        }),

    }
    
</script>