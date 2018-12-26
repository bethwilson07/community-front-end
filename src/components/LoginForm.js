import React from 'react';

const LoginForm = () => {
  return(
    <div>Login Form
      <form>
        <input type="text" name="username" placeholder="username" />
        <input type="text" name="password" placeholder="password" />
        <input type="text" name="group password" placeholder="group password" />
        <input type="submit" name="login" />
      </form>
    </div>
  )
}

export default LoginForm;
