import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { Navbar } from '../components/ui/Navbar'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashBoardRoutes = () => {
    return (
        <>
           <Navbar />

           <div className="container mt-2">
               <Switch>
                   <Route exact path="/marvel" component= { MarvelScreen } />
                   <Route exact path="/search" component= { SearchScreen } />
                   <Route exact path="/hero/:heroeId" component= { HeroScreen } />
                   <Route exact path="/dc" component= { DcScreen } />

                   <Redirect to="/marvel" />
               </Switch>
            </div> 
        </>
    )
}
