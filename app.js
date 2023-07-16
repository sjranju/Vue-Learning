const app = Vue.createApp({
    data() {
        return {
            showDetails: false,
            name: 'Ranjana',
            email: 'abc@xyz.com',
            age: 27
        }
    },

    methods: {
        hideDetails() {
            this.showDetails = !this.showDetails
        }
    }
})

app.mount('#app')