var app = new Vue(
    {
        el: '#root',
        data:{
            newToDo:'',
            todos:[
                // {
                //     text: 'testo della todo1',
                //     done: false
                // },
                // {
                //     text: 'testo della todo2',
                //     done: false
                // },
                // {
                //     text: 'testo della todo3',
                //     done: false
                // },
            ]
        },
        methods:{
            removeToDo: function(todoIndex){
                this.todos.splice(todoIndex,1);
            },
            addToDo: function(){
                let objToDo ={
                    text: this.newToDo,
                    done: false,
                }
                if(!this.newToDo == ''){
                    this.todos.push(objToDo);
                    
                    this.newToDo = ''
                }
                
            },
            done: function(element){
                
                if (element.done == true){
                    element.done = false
                }else{
                    element.done = true
                }
            }
        }   
    }
);