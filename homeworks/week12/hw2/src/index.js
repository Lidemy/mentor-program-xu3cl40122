import React from 'react'
import ReactDOM from 'react-dom'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 'home'
        }
        this.handleTab = this.handleTab.bind(this)
    }

    handleTab(e) {
        e.preventDefault()
        this.setState({
            tab: e.target.name
        })
    }

    render() {
        const { tab } = this.state
        console.log(tab)
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">BLOG2</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" name='home' onClick={this.handleTab}  >Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" name='about' onClick={this.handleTab} >About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='container'>
                    {tab}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Navbar />,
    document.getElementById('root')
)