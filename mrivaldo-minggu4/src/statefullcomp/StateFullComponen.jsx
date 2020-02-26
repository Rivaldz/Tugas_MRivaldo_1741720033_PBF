import React from 'react';

class StateFullComponen extends React.Component{
    render(){
        // return <p>Test statefull componen</p>
        return (
            <div class="form__login">
  <h1 class="form__header">Login</h1>

  <form id="loginForm" action="#" method="post" class="form">
    <fieldset class="form__group">
      <label for="mail"><span class="label__icon fa fa-at"></span></label>

      <input id="mail" name="mail" class="form__element" type="email" placeholder="Email" required />
    </fieldset>

    <fieldset class="form__group">
      <label for="password"><span class="label__icon fa fa-lock"></span></label>

      <input id="password" name="password" class="form__element" type="password" placeholder="Password" required />
    </fieldset>

    <fieldset class="form__group">
      <label for="checkbox"><input id="checkbox" name="checkbox" class="checkbox--forget" type="checkbox" /><span class="icon--checkbox fa fa-check"></span> Remember me</label>

      <a class="form__link link--right" href="#">Forgot your password?</a>
    </fieldset>

    <fieldset class="form__group">
      <input class="form__button" type="submit" value="Login" />
    </fieldset>

    <small>Not a member yet? <label for="flipper__checkbox" class="form__link">Create your account</label>.</small>
  </form>
</div>
    
        )
    }
}

export default StateFullComponen;