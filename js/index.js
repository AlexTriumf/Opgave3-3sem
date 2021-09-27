Vue.createApp({
    data() {
        return {
            word: null,
            words: [],
            message: null,
        }
    },
    methods: {
        save(word) {
            this.words.push(word)
        },
        clear() {
            this.words = []
            this.message = null
        }
       
        
    }
}).mount("#app")