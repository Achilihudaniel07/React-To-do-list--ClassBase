import React, { Component } from "react"




class MyTodolist extends Component{

    constructor(){
        super()
        // this.state=0 OR
        this.state ={
            newItem:'',
            todoItems:[ // it is an array of object
                {title:'Morning Devotion', done:false},
                {title:'Brush my teeth',  done:false},    // We change this to an object inorder to keep track of when it is done and also the title, Object allows you to have multiple items inside.       
            ]
        }
    }

    addItemToList = (event) =>{
        //do something
        event.preventDefault();
        if (this.state.newItem.length < 1){ //when the user did not type anything
            alert("Please add a task");
            return;
        }
        const newArr =[...this.state.todoItems] //copying the todoItems array into the newArr array.
        newArr.push({title:this.state.newItem, done:false}); 
        this.setState({todoItems:[...newArr], newItem: ''}) //how the state will be arranged or displayed

     
    }

    taskIsDone = (index) => {
        //do something
        console.log(index)
        
        const data = [...this.state.todoItems]
        data[index] = {...data[index], done: true}
        this.setState({ todoItems: data});   
        
     
    }
        
    render(){

        return(
            <div> 
                <h1>MY<br/>&nbsp;TO-DO&nbsp;LIST</h1>
                <i> <p>(Click on task when done) </p></i>
                    
                <form onSubmit={this.addItemToList}>
                    <input value={this.state.newItem} onChange={(event) =>this.setState({newItem: event.target.value})} type="text" placeholder="Add task"/>
                    <button type="submit">Enter</button>
                </form>

                <ol>
                    {   this.state.todoItems?.map((item, index) => (
                            <li
                                key={index.toString()} onClick={() => this.taskIsDone(index)} style={{textDecoration: item.done ? 'line-through' : '', cursor: 'pointer'}}>{item.title}
                            </li>
                        ))
                    }
                </ol>
            </div>
        )
    }
}

export default MyTodolist;