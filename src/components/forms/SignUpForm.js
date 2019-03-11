import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import validator from 'validator';
import { registerUser } from '../../actions/user';
import {isObjEmpty } from '../../utils/stringUtilities';


class SignUpForm extends Component{
  	constructor(props) {
      super(props);
      this.state={
        errors:{},
        confirmPassword:'',
        Password:'',
        Email:'',
        Fname:'',
        Lname:'',
        Phone:''
      };
      this.onChange=this.onChange.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
      this.validation=this.validation.bind(this);
    };

    onChange(e) {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      });
    }
 
    onSubmit(e) {
      e.preventDefault();
      const { userRegistration } = this.props;
      const errorsObj= this.validation();
      this.setState({
        errors:{}
      });
      
      if(isObjEmpty(errorsObj)){
        userRegistration(this.state);
      }else{
        this.setState({
          errors:errorsObj
        });
      }     
    }

    validation(){
      const { confirmPassword,Password,Email,Fname,Lname,Phone}=this.state;
      let errors={};
      if(!validator.equals(confirmPassword,Password)){
        errors = {...errors, Password:'Password do not match'};
      }if(validator.isEmpty(Fname)){
        errors = {...errors, Fname:'Enter first name'};
      }if(validator.isEmpty(Lname)){
        errors = {...errors, Lname:'Enter last name'};
      }if(!validator.isEmail(Email)){
        errors = {...errors, Email:'Provide valid email address'};
      }if(!validator.isMobilePhone(Phone,'en-KE')){
        errors = {...errors, Phone:'Provide valid phone number'};
      } 
      return errors;
    }

  render(){
    const { onSubmit,onChange}=this;
    const { errors }=this.state;
    const {errorArray,registerSuccess}=this.props;
    console.log(errorArray)
    return(
      <div style={{ marginTop: '-2em' }}>
      <div className="inner-sm">
 
        <form onSubmit={onSubmit} className="login-form">
          <div className="card card-default">
          {
            registerSuccess.length>0 && <div className="alert alert-primary" role="alert">{registerSuccess}</div>
          }
           {
            errorArray.length>0 && <div className="alert alert-danger" role="alert">{errorArray.map(error=>error.msg)}</div>
          }
          
            <div className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  name="Fname"
                  onChange={onChange}
                  placeholder="First Name..."
                  className={`form-username form-control ${ errors.Fname && 'border border-danger'}`}/> 
                { errors.Fname && <small className='text-danger'> {errors.Fname}</small>}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="Lname"
                  onChange={onChange}
                  placeholder="Last Name..."
                  className={`form-username form-control ${ errors.Lname && 'border border-danger'}`}/> 
                { errors.Lname && <small className='text-danger'> {errors.Lname}</small>}
              </div>
  
              <div className={`form-group ${ errors.Email && 'border border-danger'}`}>
                <input
                  type="email"
                  name="Email"
                  onChange={onChange}
                  required
                  placeholder="Email..."
                  className={`form-username form-control ${ errors.Email && 'border border-danger'}`}/> 
                { errors.Email && <small className='text-danger'> {errors.Email}</small>}
              </div>
  
              <div className="form-group">
                <input
                  type="text"
                  name="Phone"
                  onChange={this.onChange}
                  placeholder="Phone..."
                  className={`form-username form-control ${ errors.Phone && 'border border-danger'}`}/> 
                   { errors.Phone && <small className='text-danger'> {errors.Phone}</small>}
              </div>
  
              <div className="form-group">
                <input
                  type="password"
                  name="Password"
                  onChange={onChange}
                  placeholder="Password..."
                  className={`form-username form-control ${ errors.Password && 'border border-danger'}`}/> 
                { errors.Password && <small className='text-danger'> {errors.Password}</small>}
              </div>
                 <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={onChange}
                  placeholder="confirm password..."
                  className={`form-username form-control ${ errors.Password && 'border border-danger'}`}/> 
                { errors.Password && <small className='text-danger'> {errors.Password}</small>}
              </div>
              <button
                type="submit"
                className="btn btn-block"
                style={{ backgroundColor: '#721c24' }}
              >
                Signup
              </button>
              <br />
              <div align="center">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <a
                    className="btn "
                    href="/auth/google"
                    role="button"
                    aria-expanded="false"
                  >
                    <b>
                      <i
                        className="fab fa-google fa-3x"
                        style={{ color: '#c82333' }}
                      />
                    </b>
                  </a>
                  <a
                    className="btn "
                    href="/auth/facebook"
                    role="button"
                    aria-expanded="false"
                  >
                    <b>
                      <i
                        className="fab fa-facebook-square fa-3x"
                        style={{ color: '#0c5460' }}
                      />
                    </b>
                  </a>
                </div>
              </div>
            </div>
            <div align="center" className="card-footer">
              <b>Have an account already</b>
              <br />
              <a
                className="btn btn-secondary btn-block"
                href="/login"
                role="button"
                aria-expanded="false"
              >
                <b>Login</b>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
  }
}

SignUpForm.propTypes = {
  userRegistration: PropTypes.func.isRequired,
  errorArray:PropTypes.arrayOf(PropTypes.shape()).isRequired,
  registerSuccess:PropTypes.string.isRequired
};
const mapStatetoProps = state => ({
  errorArray: state.errors.error,
  registerSuccess: state.user.registerSuccess
});
export default connect(
mapStatetoProps,
	{ userRegistration: registerUser }
)(SignUpForm);
