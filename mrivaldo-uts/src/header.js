import React from 'react';
// import { Link } from 'react-router';

const LoggedOutView = props => {
    return( 
        < ul className="nav navbar-nav pull-xs-right" >

            <li className="nav-item">
                {/* <Link className="nav-link">
                </Link> */}
            </li>

            <li className="nav-item">
                {/* <Link className="nav-link">
                </Link> */}
            </li>            

            <li className="nav-item">
                {/* <Link className="nav-link">
                </Link> */}
            </li>            

            <li className="nav-item">
                {/* <Link className="nav-link">
                </Link> */}
            </li>

        </ul>
    );
};

class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-light">
                <div className="container">
                    {/* <Link to="" className="navbar-brand">
                        Nama Aplikasi 
                    </Link> */}

                    <LoggedOutView/>
                </div>
            </nav>

        );
    }
}

export default Header;