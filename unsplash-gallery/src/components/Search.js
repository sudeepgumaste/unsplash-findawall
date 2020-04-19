import React, {useState} from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux'

import { setKeyword, setImages, setPage } from '../actions/imagesActions';

const Form = styled.form`
    display: flex;
    margin-left: auto;
    background: rgba(255,255,255, 0.1);
    height: 2rem;
    padding-left:0.5rem;
    border-radius: 1rem;
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
        border-radius: 1rem;
        border: none;
        color: white;
        background: rgba(255, 255, 255, 0.1);
        padding: 0 1rem;
        font-weight: bold;
    }
`

const Search = (props) => {
    const [search, setSearch] = useState('');

    onsubmit = (e) => {
        e.preventDefault();
        window.scrollTop = 0;
        setTimeout(()=>{
            props.dispatch(setKeyword(search));
            props.dispatch(setImages({page: 1,imageCount: 15, keyword:search}));
            props.dispatch(setPage(2));
        }, 200)
    }

    return (
        <Form>
            <input
                type="text"
                value = {search}
                onChange = {e=>setSearch(e.target.value)}
                placeholder = "Search for.."
            />
            <button>Search</button>
        </Form>
    )
}

export default connect()(Search);