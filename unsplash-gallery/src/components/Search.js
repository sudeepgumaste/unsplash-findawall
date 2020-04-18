import React, {useState} from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    margin-left: auto;
    background: rgba(255,255,255, 0.1);
    height: 1.8rem;
    padding-left:0.5rem;
    border-radius: 0.9rem;
    overflow: hidden;
    width: 20rem;

    input{
        flex: 1;
        background: none;
        border: none;
        color: white;
        padding: 0 0.5rem;
    }

    button{
        border-radius: 0.9rem;
        border: none;
        color: white;
        background: rgba(255, 255, 255, 0.2);
        padding: 0 1rem;
        font-weight: bold;
    }
`

const Search = () => {
    const [keyword, setKeyword] = useState('');

    return (
        <Form>
            <input
                type="text"
                value = {keyword}
                onChange = {e=>setKeyword(e.target.value)}
                placeholder = "Search for.."
            />
            <button>Search</button>
        </Form>
    )
}

export default Search;