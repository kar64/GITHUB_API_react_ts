import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import { Container } from "./components/Container";
import{TheHeader}from'./components/TheHeader';
import{Search}from'./components/Search';
import{UserCard}from'./components/UserCard';
import{defaultUser}from'./mock';
import{LocalGithubUser,GithubUser,GithubError}from'./types';
import{isGithubUser}from'./utils/typeguards';
import{extractLocalUser}from'./utils/extract-local-user';

const BASE_URL='https://api.github.com/users/'

const App = () =>{
  const[user,setUser]=useState<LocalGithubUser|null>(defaultUser)
  const fetchUser= async (username:string)=>{
    const url=BASE_URL+username;
    const res= await fetch(url);
    const user=await res.json() as GithubUser |GithubError;
    if(isGithubUser(user)){
      setUser(extractLocalUser(user))
    }else{
      setUser(null)
    }
  }

return (

  <>
    <Container>
     <TheHeader/>
     <Search hasError={!user} onSubmitUser={fetchUser}/>
     {user&&(<UserCard {...user}/>)}
     
    
    </Container>

  </>
);

}


// ReactDOM.render(<App />,document.querySelector('#root'));
const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement
);
root.render(<App />);
