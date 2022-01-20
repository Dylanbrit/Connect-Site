import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import CarrierLinksPage from '../components/CarrierLinksPage'
import AboutUsPage from '../components/AboutUsPage'
import ContactPage from '../components/ContactPage'
import FaqPage from '../components/FaqPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/carrierlinks" component={CarrierLinksPage} />
                <Route path="/aboutus" component={AboutUsPage} exact={true} />
                <Route path="/contactus" component={ContactPage} exact={true} />
                <Route path="/faq" component={FaqPage} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter