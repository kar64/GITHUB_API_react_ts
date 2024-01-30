import './UserInfo.scss';
import{LocalGithubUser}from'../../types';
import{InfoItemProps,InfoItem}from'../InfoItem';
import{LocationIcon}from'../LocationIcon';
import{CompanyIcon}from'../CompanyIcon';
import{TwitterIcon}from'../TwitterIcon';
import{WebsiteIcon}from'../WebsiteIcon';


export interface UserInfoProps extends Pick<LocalGithubUser,'blog'|'company'|'location'|'twitter'>{}

export const UserInfo=({blog,company,location,twitter}:UserInfoProps)=>{

const items:InfoItemProps[]=[
    {
        Icon:LocationIcon,
        text:location,
    },
    {
        Icon:WebsiteIcon,
        text:blog,
        isLink:true
    },
    {
        Icon:TwitterIcon,
        text:twitter
    },
    {
        Icon:CompanyIcon,
        text:company
    }
]

return(
    <div className='userInfo'>
        {items.map((it,index)=>(
            <InfoItem{...it} key={index}/>
        ))}
    </div>
)

}
