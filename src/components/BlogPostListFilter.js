import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter} from '../actions/Filter';

const BlogPostListFilter = ({filter, dispatch}) => (
    <div>
    <input 
    type="text"
    value={filter.searchText}
    onChange={(e) => {
        dispatch(setTextFilter(e.target.value))
        console.log(e.target.value)
    }}
    />
    </div>
);

const mapStateToProps = (state) => ({
    filter: state.filter
})

export default connect(mapStateToProps)(BlogPostListFilter);