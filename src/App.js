// import logo from "./logo.svg"
import "./App.scss"
import styled from "@emotion/styled"
// import Box from "./components/box"
// import { Grid, ListItem } from "@mui/material"
// import "antd/dist/antd.css"
// import { Layout } from "antd"
// import { Col, Row } from "antd"
// const { Header, Footer, Sider, Content } = Layout
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
// import Card from "react-bootstrap/Card"
import ImageCard from "./components/ImageCard"
import TagBox from "./components/TagBox"
import Header from "./components/Header"
import InputGroup from "react-bootstrap/InputGroup"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import axios from "axios"
function App() {
  const [images, setImages] = useState([])
  useEffect(() => {
    const getPhotos = async () => {
      // const { data } = await axios.get("https://picsum.photos/v2/list")
      // console.log(data)
      // setImages(data)
    }
    getPhotos()
  })
  return (
    <Container className={"mt-2"}>
      <Row className='justify-content-md-center'>
        <StyledSideNav xs={12} sm={3}>
          <Row className='mb-2' xs={2}>
            <InputGroup size='xs' className='mb-3'>
              <Form.Control
                aria-label='Small'
                placeholder='New tag...'
                aria-describedby='inputGroup-sizing-sm'
              />
            </InputGroup>
          </Row>
          <Row className='justify-content-md-center mb-5'>
            <Button variant='primary' type='submit'>
              Add
            </Button>
          </Row>
          <Row className='justify-content-md-center mb-5'>
            <TagBox></TagBox>
          </Row>
        </StyledSideNav>
        <Col sm={9}>
          <StyledContainer>
            <Row className='mb-2'>
              <Header>Unassigned</Header>
            </Row>
            <StyledGallery>
              <StyledImageCard></StyledImageCard>
              <StyledImageCard></StyledImageCard>
              <StyledImageCard></StyledImageCard>
              <StyledImageCard></StyledImageCard>
              <StyledImageCard></StyledImageCard>
              <StyledImageCard></StyledImageCard>
              <StyledImageCard></StyledImageCard>
            </StyledGallery>
          </StyledContainer>
          <StyledMiniContainer>
            <TagBox></TagBox>
            <TagBox></TagBox>
            <TagBox></TagBox>
            <TagBox></TagBox>
            <TagBox></TagBox>
            <TagBox></TagBox>
            <TagBox></TagBox>
          </StyledMiniContainer>
        </Col>
      </Row>
    </Container>
  )
}

const StyledSideNav = styled(Col)`
  border: 1px solid lightgray;
  height: 500px;
  padding: 1em;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledImageCard = styled(ImageCard)`
  margin: 1px;
`
const StyledHeader = styled(Header)`
  padding-left: 1em;
`
const StyledContainer = styled.div`
  height: 500px;
  border: 1px solid lightgray;
  padding: 1em;
  overflow: auto;
`
const StyledGallery = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  margin-left: 1em;
  gap: 10px;
  &&::after {
    content: "";
    flex-basis: 37rem;
  }
`
const StyledMiniContainer = styled(StyledContainer)`
  margin-top: 1em;
  overflow-x: scroll;
  height: 350px;
  border: none;
  gap: 10px;
  border: 1px solid lightgray;
  display: flex;
`
export default App
