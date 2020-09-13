import React from 'react'

import { Switch, Route } from 'react-router-dom'

import './App.css'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInSignUp from './pages/sign-in-and-up/sign-in-and-up-component'


function App() {
  return (
    <div>
        <Header />
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInSignUp}/>
    </div>
  )
}

export default App
