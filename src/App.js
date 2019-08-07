import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { GlobalStyle } from './GlobalStyles'

export const App = () => {
  return <div><GlobalStyle /><Logo /><ListOfCategories /><ListOfPhotoCards /></div>
}