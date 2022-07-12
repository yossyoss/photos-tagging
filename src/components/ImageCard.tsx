import styled from "@emotion/styled"
import Card from "react-bootstrap/Card"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTag } from "@fortawesome/free-solid-svg-icons"
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BoxItem from './BoxItem'
import { useDispatch, useSelector } from 'react-redux'

import { RootState, Dispatch } from '../store'
library.add(faTag)

const ImageCard = ({title, url}) => {
  const {tags}:any = useSelector((state: RootState) => state.gallery)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if(tags.length)
      setShow(true)
  };
  return (
    <>
    <StyledCard>
      <Card.Img src={url} />
      <Card.Body>
        <StyledTitle>
          <StyledDiv>{title}</StyledDiv>
          <StyledIcon onClick={handleShow}>
            <FontAwesomeIcon icon={['fas', 'tag']} />
          </StyledIcon>
        </StyledTitle>
      </Card.Body>
    </StyledCard>
    
    <Modal show={show} onHide={handleClose} size="sm">
    <Modal.Body>
    {tags.map(tag=>{
        return(
        <BoxItem tag={tag.name} key={tag.id} onClick={handleClose} color={tag.color}></BoxItem>
        )
      })}

    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
    </>
  )
}
const StyledCard = styled(Card)`
  flex-basis: 12rem;
  padding: 0;
  border: none;
`
const StyledTitle = styled(Card.Title)`
display:flex;
justify-content: space-between;
`
const StyledDiv = styled.div``
const StyledIcon = styled.div`
cursor:pointer;
`
export default ImageCard
