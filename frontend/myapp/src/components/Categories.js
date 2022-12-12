import React, {Component} from "react";

export class Categories extends Component{
    constructor(props){
        super(props)
        

        
        this.state = {
            categories:[
                {
                    key: 'all',
                    name:'Всё'

                },
                {
                    key: 'Iphone',
                    name:'Iphone'

                },
                {
                    key: 'SAMSUNG',
                    name:'Samsung'

                },
                {
                    key: 'Huawei',
                    name:'Huawei'

                },
            ]

        }
    }
    render(){
        return(
            <div className="categories">
                {this.state.categories.map(el =>(
                    <div key={el.key}>{el.name}</div>
                ))}

            </div>

        )
        
    }
    
    }
    


