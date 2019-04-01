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
    return(
       <div className="limiter" style={{backgroundColor:'#e2a3a3',alignContent:'centre'}}>
            <div className="container-login100">
            <div className="login100-more">
            <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
              <form onSubmit={onSubmit} className="login100-form validate-form">
              <span className="login100-form-title p-b-59">
                  Sign Up
                </span>
                {
                  registerSuccess.length>0 && <div className="alert alert-primary" role="alert">{registerSuccess}</div>
                }
                {
                  errorArray.length>0 && <div className="alert alert-danger" role="alert">{errorArray.map(error=>error.msg)}</div>
                }
                
                <div className={`wrap-input100 validate-input ${ errors.Fname && 'border border-danger'}`} data-validate="Name is required">
                  <span className="label-input100">First Name</span>

                      <input
                        type="text"
                        name="Fname"
                        onChange={onChange}
                        placeholder="First Name..."
                        className={` input100 ${ errors.Fname && 'border border-danger'}`}/> 
                      { errors.Fname && <small className='text-danger'> {errors.Fname}</small>}
                    
                  <span className="focus-input100" />
                </div>
                  <div className={`wrap-input100 validate-input ${ errors.Lname && 'border border-danger'}`} data-validate="Name is required">
                  <span className="label-input100">Last Name</span>
                  <input
                        type="text"
                        name="Lname"
                        onChange={onChange}
                        placeholder="Last Name..."
                        className={`input100 ${ errors.Lname && 'border border-danger'}`}/> 
                      { errors.Lname && <small className='text-danger'> {errors.Lname}</small>}
                      <span className="focus-input100" />
                </div>
        
                <div className={`wrap-input100 validate-input ${ errors.Email && 'border border-danger'}`} data-validate="Name is required">
                  <span className="label-input100">Email</span>
                      <input
                        type="email"
                        name="Email"
                        onChange={onChange}
                        placeholder="Email..."
                        className={`input100 ${ errors.Email && 'border border-danger'}`}/> 
                      { errors.Email && <small className='text-danger'> {errors.Email}</small>}
                      <span className="focus-input100" />
                </div>
        
                <div className={`wrap-input100 validate-input ${ errors.Phone && 'border border-danger'}`} data-validate="Name is required">
                  <span className="label-input100">Phone</span>
                      <input
                        type="text"
                        name="Phone"
                        onChange={onChange}
                        placeholder="Phone..."
                        className={`input100 ${ errors.Phone && 'border border-danger'}`}/> 
                        { errors.Phone && <small className='text-danger'> {errors.Phone}</small>}
                        <span className="focus-input100" />
                </div>
        
                <div className={`wrap-input100 validate-input ${ errors.Password && 'border border-danger'}`} data-validate="Name is required">
                  <span className="label-input100">Password</span>
                      <input
                        type="password"
                        name="Password"
                        onChange={onChange}
                        placeholder="Password..."
                        className={`input100 ${ errors.Password && 'border border-danger'}`}/> 
                      { errors.Password && <small className='text-danger'> {errors.Password}</small>}
                      <span className="focus-input100" />
                </div>
                <div className={`wrap-input100 validate-input ${ errors.Password && 'border border-danger'}`} data-validate="Name is required">
                  <span className="label-input100">confirm password</span>
                      <input
                        type="password"
                        name="confirmPassword"
                        onChange={onChange}
                        placeholder="confirm password..."
                        className={`input100 ${ errors.Password && 'border border-danger'}`}/> 
                      { errors.Password && <small className='text-danger'> {errors.Password}</small>}
                      <span className="focus-input100" />
                </div>

                <div className="flex-m w-full p-b-33">
                  <div className="contact100-form-checkbox">
                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                    <label className="label-checkbox100" htmlFor="ckb1">
                      <span className="txt1">
                        I agree to the
                        <a href="/" className="txt2 hov1">
                          Terms of User
                        </a>
                      </span>
                    </label>
                  </div>

                  
                </div>   
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button type="submit" className="login100-form-btn">
                      Sign Up
                    </button>
                  </div>

                  <a href="/" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
                    Sign in
                    <i className="fa fa-long-arrow-right m-l-5" />
                  </a>
                </div>      
                
              </form>
            </div>
          </div>
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
