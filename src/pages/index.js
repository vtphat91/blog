import React from "react"

import SlideBar from "../components/SlideBar"
import Page from '../components/Page'
import Feed from '../components/Feed'

const Index = () => {


  return (
      <>
        <SlideBar />
        <Page >
          <Feed ></Feed>
        </Page>
      </>
  )
}

export default Index

