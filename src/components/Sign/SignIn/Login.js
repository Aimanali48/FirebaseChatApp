import React, { useState } from 'react';
import { onLoginPress } from '../../../Firebase/services/services';
import { withRouter } from 'react-router-dom';

function Login(props) {
  return (
    <div className='container'>
      <br />{' '}
      <div className='card bg-light' style={{ marginBottom: '40px' }}>
        <article className='card-body' style={{ width: '550px' }}>
          <h4 className='card-title mt-3 text-center'>Sign In</h4>
          <p>
            <button
              className='btn btn-block btn-gmail'
              onClick={() => onLoginPress(props.history)}
            >
              {' '}
              <i className='fa fa-gmail' />   Login via Gmail
            </button>
            <a href='/#' className='btn btn-block btn-github'>
              {' '}
              <i className='fab fa-github' /> Login via Github
            </a>
          </p>
          <p className='divider-text'>
            <span className='bg-light'>OR</span>
          </p>
          <form>
            <div className='form-group input-group' />
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
                placeholder='password'
                type='password'
              />
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-primary btn-block'>
                {' '}
                Sign In{' '}
              </button>
            </div>
          </form>
        </article>
      </div>
    </div>
  );
}

export default withRouter(Login);
