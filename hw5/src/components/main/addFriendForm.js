/**
 * Created by yusong on 10/27/16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import * as FollowingActions from '../../actions/followingActions'

class AddFriendForm extends Component {
    handleFormSubmit = (values) => {
        alert(JSON.stringify(values, null, 4));
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                <div>
                    <Field name="friendId" component="input" type="text"/>
                    <button type="submit">Add</button>
                </div>
            </form>
        );
    }
}

// Decorate the form component
AddFriendForm = reduxForm({
    form: 'newFriend' // a unique name for this form
})(AddFriendForm);

export default connect(null, FollowingActions)(AddFriendForm)