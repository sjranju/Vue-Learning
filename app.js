const app = Vue.createApp({
    data() {
        return {
            url: "https://github.com/sjranju/Vue-Learning/tree/master",
            showDetails: true,
            students: [
                { name: 'Ranjana', email: 'abc@xyz.com', age: 27, fav: true },
                { name: 'Ranjan', email: 'xyz@abc.com', age: 31, fav: true },
                { name: 'Unknowm', email: 'abc1@xyz.com', age: 35, fav: false }

            ]

        }
    },

    methods: {
        hideDetails() {
            this.showDetails = !this.showDetails
        },
        handleToggleStudent(student) {
            student.fav = !student.fav
            console.log(student)

        }
    }
})

app.mount('#app')