import React from 'react';
import './Register.css';
function Register() {
  return (
    <div className='container'>
      <br />{' '}
      <div className='card bg-light'>
        <article className='card-body cardbody' style={{ width: '550px' }}>
          <h4 className='card-title mt-3 text-center'>Create Account</h4>
          <p className='text-center'>Get started with your free account</p>
          <p>
            <a href='#' className='btn btn-block btn-gmail'>
              {' '}
              <i className='fa fa-gmail' />   Login via Gmail
            </a>
            <a href='#' className='btn btn-block btn-github'>
              {' '}
              <i className='fab fa-github' /> Login via Github
            </a>
          </p>
          <p className='divider-text'>
            <span className='bg-light'>OR</span>
          </p>
          <form>
            <div className='form-group input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  {' '}
                  <i className='fa fa-user' />{' '}
                </span>
              </div>
              <input
                name=''
                className='form-control'
                placeholder='Full name'
                type='text'
              />
            </div>
            <div className='form-group input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  {' '}
                  <i className='fa fa-envelope' />{' '}
                </span>
              </div>
              <input
                name=''
                className='form-control'
                placeholder='Email address'
                type='email'
              />
            </div>
            <div className='form-group input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  {' '}
                  <i className='fa fa-lock' />{' '}
                </span>
              </div>
              <input
                className='form-control'
                placeholder='Create password'
                type='password'
              />
            </div>
            <div className='form-group input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  {' '}
                  <i className='fa fa-lock' />{' '}
                </span>
              </div>
              <input
                className='form-control'
                placeholder='Repeat password'
                type='password'
              />
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-primary btn-block'>
                {' '}
                Create Account{' '}
              </button>
            </div>
            <p className='text-center'>
              Have an account? <a href='/login'>Log In</a>{' '}
            </p>
          </form>
        </article>
      </div>
    </div>
  );
}

export default Register;
