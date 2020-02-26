import React from 'react';
import './desain.css';

class StateFullComponen extends React.Component{
    render(){
        // return <p>Test statefull componen</p>
        return (
            <div class="kotak_login form_ini" align="center">
            <h2>Form Login</h2>
            <br/>
            <div class="border_div">
            <form>
                <h2>  Tugas Pertemuan Ke Empat</h2>
                <label> Username </label>
		        <input type="text" name="username" class="form_login" placeholder="Username"/>

                <label> Password </label>
                <input type="text" name="password" class="form_login" placeholder="Password"/>

                <input type="submit" class="tombol_login" value="LOGIN"/>

                <label for="checkbox"><input id="checkbox" name="checkbox" class="checkbox--forget" type="checkbox" />
                <span class="icon--checkbox fa fa-check"></span> Remember me</label>
                <br/>
                <br/>
                <br/>

                {/* <input type="submit" class="tombol_login2" value="LOGIN"/> */}
                <button class="tombol_login2">Cancel</button>
            </form>
        </div>
            </div>
        )
    }
}

export default StateFullComponen;