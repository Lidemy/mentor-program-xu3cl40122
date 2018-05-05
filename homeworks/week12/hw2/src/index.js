import React from 'react'
import ReactDOM from 'react-dom'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }
    render(){
        const {posts} = this.state
        return(
            <div>
                <h2>Blog posts</h2>
                <ul className="list-group">
                    {posts.map(post =>{
                        return(
                            <li className="list-group-item">{post.title}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

class About extends React.Component{
    render(){
        return(
            <form>
                <h2>Contact us</h2>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

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
                            <li className={"nav-item " + (tab ==='home'? 'active' : '')}>
                                <a className="nav-link" name='home' onClick={this.handleTab}  >Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className={"nav-item " + (tab === 'about' && 'active')}>
                                <a className="nav-link" name='about' onClick={this.handleTab} >About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='container'>
                    {tab === 'home' && <Home />}
                    {tab === 'about' && <About />}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Navbar />,
    document.getElementById('root')
)