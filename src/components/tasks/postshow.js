import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../static/style.css'


class Postshow extends React.Component{
    constructor(){
        super()
        this.state ={
            user:{},
            post:{},
            comments:[]
        }

    }

    componentDidMount(){

        const id = this.props.match.params.id

        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{

            const post = response.data

            this.setState({post})

            axios.get(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then((response)=>{
                const user = response.data

                this.setState({user})
            })

            axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
            .then((response)=>{
                const comments = response.data

                this.setState({comments})
            })
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }

    render(){
        return(
            <div>
                <h1 className="card-header">{this.state.user.name}</h1>
                <div className="card-body">
                <h2 className="card-title">Title </h2> 
                <p className="card-text"> {this.state.post.title}</p> 
                <h2 className="card-title">Body </h2> 
                <p className="card-text"> {this.state.post.body}</p> 
                <hr/>

                </div>
                
                
                <h1 className="card-header">COMMENTS</h1>
                
                    <ul className="list-group" >
                    {
                        this.state.comments.map((comment)=>{
                            return(
                            <li key={comment.id}><p className="list-group-item">{comment.body}</p></li>
                            )
                        })
                    }
                </ul>
                
                    <hr/>
                <p><Link to={`/usershow/${this.state.post.id}`}>More posts of author:{this.state.user.name}</Link></p>
                </div>
            
        )
    }
}
export default Postshow