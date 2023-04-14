// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [ '@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Single Page Developer Protfolio',
            meta: [
                {
                    name: 'decription', content: 'Single Page Developer Protfolio for Darryl Nicholson'
                }
            ],
            link: [
                {
                    rel: 'init-font', href: 'https://fonts.googleapis.com',
                }
            ]
        }
    }
})
