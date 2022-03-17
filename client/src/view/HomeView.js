import React from 'react'
import { Stations } from '../components/Stations'
import { Home } from '../components/Home'
import {Chat} from '../components/Chat'




export const HomeView = () => {
  return (
    <>
        <Home/>
        <Stations/>
        <Chat/>
    </>
  )
}
