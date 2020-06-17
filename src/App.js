import React from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom'
import home from './components/static/home'
import users from './components/static/userlist'
import posts from './components/static/postlist'
import usershow from './components/tasks/usershow'
import postshow from './components/tasks/postshow'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div  >
     
     <div class="container-fluid" > 
     <ul class="nav nav-pills ">
       <li > <Link to="/home" class="nav-link active">Home</Link></li>
      <li><Link to="/users" class="nav-link active">Users</Link></li>
     <li> <Link to="/posts" class="nav-link active">Posts</Link></li>
     </ul>
     
      </div>
     

      <Route path="/home" component={home} exact={true}/>
      <Route path="/users" component={users} exact={true}/>
      <Route path="/posts" component={posts} exact={true}/>
      
      <Route path="/usershow/:id" component={usershow} />
      <Route path="/postshow/:id" component={postshow} />


     

      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
