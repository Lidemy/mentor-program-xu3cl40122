import React from 'react'
import ReactDOM from 'react-dom'

class Navbar extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">BLOG2</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" name = 'home'  >Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" name = 'about'  >About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

ReactDOM.render(
    <Navbar />,
    document.getElementById('root')
)