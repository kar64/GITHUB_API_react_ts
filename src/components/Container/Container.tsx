import './Container.scss';
import{ReactNode}from'react'

export interface ContainerProps {
    children:ReactNode
}

export const Container=({children}:ContainerProps)=>(
    <div className='container'>
        {children}
    </div>
)