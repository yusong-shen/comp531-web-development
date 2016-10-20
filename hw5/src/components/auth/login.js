/**
 * Created by yusong on 10/20/16.
 */

import React from 'react'

var ReactForms = require('react-forms')
var Schema = ReactForms.schema.Schema
var Property = ReactForms.schema.Property
var Form = ReactForms.Form

var schema = (
    <Schema>
        <Property
            name="description"
            required
            label="Message"
            input={<textarea placeholder="Give us details here..." />}
        />
        <Property
            name="email"
            label="Email"
            required
            input={<input type="email" />}
            validate={function(v) { return /.+\@.+\..+/.test(v) }}
        />
    </Schema>
)

const LoginForm = React.createClass({

    render: function() {

        // render Form as <div /> and transfer all props to it
        var form = this.transferPropsTo(
            <Form ref="form" component={React.DOM.div} />
        )

        // return <form /> component with rendered form and a submit button
        return (
            <form onSubmit={this.onSubmit} className="MyForm">
                {form}
                <button type="submit">Submit</button>
            </form>
        )
    },

    onSubmit: function(e) {
        e.preventDefault()

        // check if form is valid
        var validation = this.refs.form.value().validation
        if (ReactForms.validation.isFailure(validation)) {
            console.log('invalid form')
            return
        }

        alert('form submitted!')
    }
})

// React.renderComponent(
//     <MyForm schema={schema} />,
//     document.getElementById('example'))

export default LoginForm