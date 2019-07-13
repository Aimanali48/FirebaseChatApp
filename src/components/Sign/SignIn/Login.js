import React from 'react';
import { connect } from 'react-redux';
import { LoginUser } from '../../../redux/actions/action';
import { withRouter } from 'react-router-dom';

function Login(props) {
  const handleLogin = () => {
    props.LoginUser(props.history);
  };

  return (
    <div className='container'>
      <br />{' '}
      <div className='card bg-light' style={{ marginBottom: '40px' }}>
        <article className='card-body' style={{ width: '550px' }}>
          <h4 className='card-title mt-3 text-center'>Sign In</h4>
          <p>
            <button
              className='btn btn-block btn-gmail'
              onClick={() => handleLogin()}
            >
              {' '}
              <i className='fa fa-gmail' />   Login via Gmail
            </button>
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

export default connect(
  null,
  { LoginUser }
)(withRouter(Login));
