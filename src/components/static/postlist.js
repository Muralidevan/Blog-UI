import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../static/style.css'

class Postlist extends React.Component{
    constructor(){
        super()
        this.state = {
            posts:[]

        }
    }

    componentDidMount(){

        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            const posts = response.data

            this.setState({posts})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <h1 className="card-header">Total Posts-{this.state.posts.length}</h1>
                <ul className="list-group ">
                    {
                        this.state.posts.map((post)=>{
                            return(
                            <li key={post.id}><Link to={`/postshow/${post.id}`}  className="list-group-item ">{post.title}</Link></li>
                            )
                        })
                    }
                </ul>

            </div>
        )
    }
}

export default Postlist