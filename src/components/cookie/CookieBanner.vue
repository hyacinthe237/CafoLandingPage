<template>
    <div class="banner">
        <p>Nous utilisons des cookies de suivi pour comprendre comment vous utilisez le produit et nous aider à l'améliorer.
Veuillez accepter les cookies pour nous aider à nous améliorer.</p>
        <button type="button" @click="acceptCookies">Valider</button>
        <button type="button" @click="declineCookies">Refuser</button>
    </div>
</template>
  
<script>
export default {
    name: "CookieBanner",

    methods: {
        acceptCookies() {
            this.$posthog.opt_in_capturing()
            this.$emit("hideBanner")
        },

        declineCookies() {
            this.$posthog.opt_out_capturing()
            this.$emit("hideBanner")
        }
    }
};
</script>

<style scoped>
.banner {
    background-color: #f1f1f1;
    padding: 20px;
    text-align: center;
}
</style>