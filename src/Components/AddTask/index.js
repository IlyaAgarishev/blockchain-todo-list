import React, {Component} from 'react';
import './index.css';
import Items from '../Items';

class AddTask extends Component{
    constructor(props){
        super(props);

        this.state = {
            items:[]
        }
    }

    addItem = (e) =>{
        if(this.textarea.value !== ""){
            let newItem = {
                text:this.textarea.value,
                key: Date.now()
            }
            
            this.setState({
                items: this.state.items.concat(newItem)
            })
        }
        this.textarea.value = "";
        e.preventDefault();
    }

    delete = (key) => {
        let filteredList = this.state.items.filter((item)=>{
            return (item.key !== key)
        })

        this.setState({items:filteredList})
    }

    render(){
        return(
            <div className='content'>
                <Items items={this.state.items} delete={this.delete}/>
                <div className="addTaskArea">
                    <form className='addTask' onSubmit={this.addItem}>
                        <textarea ref={ref=>this.textarea=ref} className='textArea'></textarea>
                        <button type="submit" className='buttonToAdd'></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddTask;