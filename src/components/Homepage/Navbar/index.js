import React from 'react';
import logo from '../../../assests/logo.png';
import { NavLink } from 'react-router-dom';


const menu = require('../../../data/menu.json');

class Navbar extends React.Component{

    state = {
        scroll: false
    }
   
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }

      header = React.createRef();

      handleScroll = () => {
        if(window.scrollY > 145){
            this.setState({
                scroll: true
            });
        }else{
            this.setState({
                scroll: false
            });
        }
      }

    render(){
        return (
        <div>
          <header ref={this.header} className={this.state.scroll ? "hscroll" : ""}>
              <div className={this.state.scroll ? "llogo" : "logo"}>
                <img src={logo} alt="" />
              </div>
              <nav>
                  <ul>
                      {
                          menu.map(item => (
                              <li key={item.id} 
                                  className={this.state.scroll ? "lscroll" : ""}>
                                  <NavLink 
                                   to={(item.id === 1) ? "/" : `/${item.name}`}
                                   exact
                                   activeClassName={this.state.scroll ? "activeS" : "active"}>
                                   {item.name}
                                  </NavLink>
                              </li>
                          ))
                      }
                  </ul>
              </nav>
          </header>
        </div>
        );
    }
}

export default Navbar;