new Vue({
    el: '#root',
    data: {
        arrTodo: [
            "Fare la spesa",
            "Portare fuori il cane",
            "Buttare la spazzatura",
        ],

        newTodo: "",  

    done: false 
    },

    methods:{
        doneLine(){
            this.done = !this.done;
        },
        clearTodo(index){
            this.arrTodo.splice(index, 1)
        },

        addTodo(){
            this.arrTodo.push(this.newTodo)
            this.newTodo = ''
        },
    }
});