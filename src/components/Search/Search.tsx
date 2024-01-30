import "./Search.scss";
import { SearchIcon } from "../SearchIcon";

import{Button}from'../Button';

type FormFields={
    username:HTMLInputElement
}


export interface SearchProps {
  hasError: boolean;
  onSubmitUser: (text: string) => void;
}

export const Search = ({ hasError, onSubmitUser }: SearchProps) => {
 
  const handleSubmit=(e:React.FormEvent<HTMLFormElement&FormFields>)=>{
    e.preventDefault();
    const text=e.currentTarget.username.value
    if(text.trim()){
        onSubmitUser(text)
        e.currentTarget.reset();
    }
    
  
  }
  return(  
  <form
    onSubmit={handleSubmit}
    
  >
    <div className="search">
        <label htmlFor="search" className='label'>
            <SearchIcon/>
        </label>
        <input 
        className='textField'
        type="text"
       
        id='search'
        name='username'
        placeholder='Search GitHub username...'
        autoComplete='off'
        />
        {hasError&&(
            <div className="error">No result</div>
        )}
        <Button>Search</Button>
    </div>
  </form>)

};
