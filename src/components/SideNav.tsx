import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import TagBox from "./TagBox"
import styled from "@emotion/styled"
import {useState} from 'react'
import { useDispatch } from 'react-redux'

import {  Dispatch } from '../store'

const SideNav = () => {
    const { tags: tagsDispatch } = useDispatch<Dispatch>()
    const [name, setName] = useState('');
    const handleAddTag = () => {
        tagsDispatch.addTag(name)
        setName('')
    }
    const handleChange= (event) => {
        setName(event.target.value);
      }
return (
    <StyledSideNav xs={12} sm={3}>
          <Row className='mb-2' xs={2}>
            <InputGroup size='sm' className='mb-3'>
              <Form.Control
              value={name} onChange={handleChange}
                aria-label='Small'
                placeholder='New tag...'
                aria-describedby='inputGroup-sizing-sm'
              />
            </InputGroup>
          </Row>
          <Row className='justify-content-md-center mb-5'>
            <Button variant='primary' type='submit' onClick={handleAddTag}>
              Add
            </Button>
          </Row>
          <Row className='justify-content-md-center mb-5'>
            <TagBox></TagBox>
          </Row>
        </StyledSideNav>
)
}

const StyledSideNav = styled(Col)`
  border: 1px solid lightgray;
  height: 500px;
  padding: 1em;
  overflow-x: auto;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default SideNav