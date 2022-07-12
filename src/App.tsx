import { connect } from 'react-redux'

import "./App.scss"
import styled from "@emotion/styled"

import Container from "react-bootstrap/Container"

import SideNav from "./components/SideNav"
import TagsGallery from "./components/TagsGallery"
import ImageGallery from "./components/ImageGallery"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'

import { RootState, Dispatch } from './store'

const App = () => {
  

  const { images: imagesDispatch } = useDispatch<Dispatch>()
  useEffect(()=>{
      imagesDispatch.getAllImages()
  },[])
  
  return (
    <Container className={"mt-2"}>
      <Row className='justify-content-md-center'>
       <SideNav/>
        <Col sm={9}>
          <ImageGallery/>
          <TagsGallery/>
        </Col>
      </Row>
    </Container>
  )
}


export default App
