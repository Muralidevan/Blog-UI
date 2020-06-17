import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../static/style.css'

class Usershow extends  React.Component{
    constructor(){
        super()
        this.state ={
            user:{},
            posts:[]
        }

    }

    componentDidMount(){
        console.log(this.props)
        const id = this.props.match.params.id

        

        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const user = response.data

            this.setState({user})

            axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response)=>{
                const posts = response.data

                this.setState({posts})

            })

        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <h1 className=" card-header">{this.state.user.name}</h1>
                <h2 className="card-header">Posts Written by {this.state.user.name} - {this.state.posts.length}</h2>
                <ol className="list-group ">
                    {
                        this.state.posts.map((post)=>{
                            return(
                            <li key={post.id} ><Link to={`/postshow/${post.id}`}className="list-group-item ">{post.title}</Link></li>
                            )
                        })
                    }
                </ol>

            </div>
        )
    }
}
export default Usershow