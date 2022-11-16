new Vue({
    el: '#root',
    data: {
        arrTodo: [
            {
                text: "Fare la spesa",
                done: false 
            },
            {
                text: "Buttare la spazzatura",
                done: false 
            },
            {
                text: "Portare fuori il cane",
                done: false 
            },           
        ],

        newTodo: {
            text: '',
            done: false 
        },
          
    },

    methods:{
        doneLine(index){
            this.arrTodo[index].done = !this.arrTodo[index].done;
        },

        clearTodo(index){
            this.arrTodo.splice(index, 1)
        },

        addTodo(){
            if(this.newTodo.text.trim()){
                this.newTodo.text = this.newTodo.text.trim()
                this.arrTodo.push({...this.newTodo})
                this.newTodo.text = ''
            }
            
        },
    }
});