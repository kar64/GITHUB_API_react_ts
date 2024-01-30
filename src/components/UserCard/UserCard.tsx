import './UserCard.scss';
import{UserStat}from'../UserStat';
import{UserTitle}from'../UserTitle';
import{LocalGithubUser}from'../../types';
import{UserInfo}from'../UserInfo';

export interface UserCardProps extends LocalGithubUser {}


export const UserCard=(props:UserCardProps)=>(
    <div className='userCard'>
        <img src={props.avatar} alt={props.login} className='avatar'/>
        <UserTitle
            name={props.name}
            login={props.login}
            created={props.created}
        />
        <p className={`bio${props.bio?'':' empty'}`}>
            {props.bio||'This profile has no bio'}
        </p>
       <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}

       />
       <UserInfo
        blog={props.blog}
        company={props.company}
        location={props.location}
        twitter={props.twitter}
       />
    </div>
)