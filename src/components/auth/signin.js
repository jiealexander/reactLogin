import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
    handleFormSubmit({email, password }) {
        this.props.signinUser({ email, password }, () =>{
            this.props.history.push('/dashboard');
        });
    }

    renderAlert() {
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops</strong> { this.props.errorMessage }
                </div>
            )
        }
    }


    render() {
        const { handleSubmit, fields: { email, password}} = this.props;

         return (<form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
            <div className="form-group" key={ email }>
                <label>Email: </label>
                <input {...email} className="form-control"/>
            </div>
            <div className="form-group" key={password}>
                <label>Password: </label>
                <input {...password} type="password" className="form-control"/>
            </div>
            <br/>
                 {this.renderAlert()}
            <button action="submit" className="btn btn-primary">Login</button>
        </form>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);