import React from 'react'
import Link from '../Router/Link';
import Router from '../Router/Router';
import Style from './Header.module.css'
import SignIn from '../Layer/SignIn';
import About from '../Layer/About';
import Account from '../Layer/Account';
import Collection from '../Layer/Collection';
import Search from '../Layer/Search';
import Shop from '../Layer/Shop';


export default function Header(props) {
  return (
    <>

      <header className={Style.header}>
        <div className={Style.right_H}>
          <Link to="/SignIn" handlClick={props} >
            SignIn
          </Link>
          <Link to='/Search'>
            Search
          </Link>
          <Link to='/Account'>
            Account
          </Link>

        </div>
        <p>Collection Arezoo.FDE</p>

        <div className={Style.left_H}>
          <Link to='/Collection'>
            Collection
          </Link>
          <Link to='/About'>
            About
          </Link>
          <Link to='/Shop'>
            Shop
          </Link>



        </div>
      </header>
      {/* <Router path={'/SignIn'}>
        <SignIn />
      </Router>
      <Router path={'/Search'}>
        <Search />
      </Router>
      <Router path={'/Account'}>
        <Account />
      </Router>
      <Router path={'/Collection'}>
        <Collection />
      </Router>
      <Router path={'/About'}>
        <About />
      </Router>
      <Router path={'/Shop'}>
        <Shop />
      </Router> */}

      <style jsx>
        {
          `
    a:link {
      color: red;
    }
    
    /* visited link */
    a:visited {
      color: green;
    }
    
    /* mouse over link */
    a:hover {
      color: hotpink;
    }
    
    /* selected link */
    a:active {
      color: blue;
    }
    
    `
        }
      </style>
    </>
  )
}