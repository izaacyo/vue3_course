const app = Vue.createApp({
    data(){
        return{
            title: 'The final empire',
            author: 'Brandon',
            age: '65'
        }
        
    },
    methods: {
        changeTitle(title){
            this.title = title
        }
    }
 
})

app.mount('#app')