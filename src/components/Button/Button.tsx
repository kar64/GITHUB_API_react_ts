import './Button.scss';

export interface ButtonProps {
    children:string,
    onClickUser?:React.MouseEventHandler<HTMLButtonElement>
}

export const Button=({children,onClickUser}:ButtonProps)=>(
    <button 
    className='button'
    onClick={onClickUser}
    >
    {children}
    </button>
)