import { connect } from 'react-redux'

import "./App.css"
import styled from "@emotion/styled"

import Container from "react-bootstrap/Container"

import SideNav from "./components/SideNav"
import TaggedImagesGrid from "./components/TaggedImagesGrid"
import ImageGrid from "./components/ImageGrid"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'

import { RootState, Dispatch } from './store'

const App = () => {
  

  const { gallery: imagesDispatch } = useDispatch<Dispatch>()
  useEffect(()=>{
      imagesDispatch.getAllImages()
  },[])
  
  return (
    <Container className={"mt-2"}>
      <Row className='justify-content-md-center'>
       <SideNav/>
        <Col sm={9}>
          <ImageGrid/>
          <TaggedImagesGrid/>
        </Col>
      </Row>
    </Container>
  )
}


export default App
