import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import TagsBox from "./TagsBox"
import styled from "@emotion/styled"
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import {  Dispatch } from '../store'

const SideNav = () => {
    const { gallery: tagsDispatch } = useDispatch<Dispatch>()
    const [name, setName] = useState('');
    const handleAddTag = () => {
        if(name){
            const color = `(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
            tagsDispatch.addTag({name, id: uuidv4(), color, images:[]})
            setName('')
        }
    }
    const handleChange= (event) => {
        setName(event.target.value);
      }
      const handleKeypress = event => {
        if (event.charCode === 13) {
          setName(event.target.value);
          handleAddTag()
        }
      }
return (
    <StyledSideNav xs={12} sm={3} className="">
          <Row className='mb-2' xs={2}>
          
            <StyledInput size='sm' className='mb-3' onKeyPress={handleKeypress}>
            
              <Form.Control
              value={name} onChange={handleChange}
                aria-label='Small'
                placeholder='Add New tag...'
                aria-describedby='inputGroup-sizing-sm'
              />
              <SyledButton variant='primary' type='submit' onClick={handleAddTag}>
              Add
            </SyledButton>
            </StyledInput>
          </Row>
          {/* <Row className='shadow-lg p-3 mb-5 bg-white rounded justify-content-md-center mb-3'>
            <Button variant='primary' type='submit' onClick={handleAddTag}>
              Add
            </Button>
          </Row> */}
          <Row className='justify-content-md-center mb-5'>
            <TagsBox></TagsBox>
          </Row>
        </StyledSideNav>
)
}
const StyledInput = styled(InputGroup)`
input {
  border-radius: 30px !important;
  &:focus {
    z-index:0 !important;
  }
}
`
const SyledButton = styled(Button)`
  border-radius: 0 30px 30px 0 !important;
  position: absolute !important;
  right: 13px !important;
  z-index:99;
`
const StyledSideNav = styled(Col)`
  //border: 1px solid lightgray;
  //height: 500px;
  padding: 1em;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default SideNav