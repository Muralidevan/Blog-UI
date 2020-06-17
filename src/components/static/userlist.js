import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../static/style.css'

class Userlist extends React.Component{
    
    constructor(){
        super()
        this.state={
            users:[]
        }
    }

    componentDidMount(){

        axios.get('http://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users = response.data

            this.setState({ users})

        })
        .catch(function(err){
            console.log(err)

        })

     
    }


    render(){

        return(
            <div>
                <h1 className="card-header">Users-{this.state.users.length}</h1>
                <ol className="list-group ">
                    {
                        this.state.users.map((user)=>{
                            return(
                            <li  key={user.id} ><Link to={`/usershow/${user.id}` } className="list-group-item " >{user.name}</Link></li>
                            )

                        })
                    }
                </ol>
            </div>
        )
    }
}

export default Userlist