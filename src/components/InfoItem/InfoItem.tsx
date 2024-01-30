import './InfoItem.scss';

export interface InfoItemProps {
    Icon:() => JSX.Element,
    text?:string|null,
    isLink?:boolean
}

export const InfoItem=({Icon,text,isLink}:InfoItemProps)=>{
const currentText=text||'Not Available'
let currentHref='';

if(isLink){
    currentHref=text&&text.startsWith('http')?text:`https://${text}`;
}

    return(
    <div className={`infoItem${text?'':' empty'}`}>
        <Icon/>
        <div className="">
            {isLink&&text?(
                <a href={currentHref}
                target='_blank'
                rel='noreferrer'
                className='link'
                >{currentText}</a>
            ):currentText}
        </div>
    </div>
)

}
