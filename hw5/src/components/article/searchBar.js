/**
 * Created by yusong on 10/23/16.
 */

import React from 'react'
import {Button} from 'react-bootstrap'


const SearchBar = React.createClass({
    render() {
        return (
            <form className="searchBar">
                <input type="text" placeholder="Search..." />
            </form>
        )
    }
})


export default SearchBar