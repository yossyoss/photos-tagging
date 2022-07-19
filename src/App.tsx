import "./App.scss"
import Container from "react-bootstrap/Container"

import SideNav from "./components/SideNav"
import TaggedImagesGrid from "./components/TaggedImagesGrid"
import ImageGrid from "./components/ImageGrid"
import { DragDropContext } from 'react-beautiful-dnd'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react"
import { useDispatch } from 'react-redux'

import { Dispatch } from './store'

const App = () => {
  

  const { gallery: imagesDispatch } = useDispatch<Dispatch>()
  useEffect(()=>{
      imagesDispatch.getAllImages()
  },[])
  const onDragEnd = result => {
    // TODO: reorder our column
  }
  return (
    <Container className={"mt-2"}>
      <Row className='justify-content-md-center'>
       <SideNav/>
        <Col sm={9}>
          <ImageGrid/>
          <DragDropContext onDragEnd={onDragEnd}>
          <TaggedImagesGrid/>
          </DragDropContext>
        </Col>
      </Row>
    </Container>
  )
}


export default App
