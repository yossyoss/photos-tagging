import styled from "@emotion/styled"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import DrugableBoxItem from "./DrugableBoxItem"
import BoxItem from "./BoxItem"
import Header from './Header'
import { Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux'

import { RootState, Dispatch } from '../store'
const TaggedImagesBox = ({name, tagId, color, images}) => {

  const { gallery: tagsDispatch } = useDispatch<Dispatch>()

return (
  <Droppable droppableId="droppable">
          {provided => (
    <StyledCard>
     <StyledHeader className='text-center mb-2' color={color}>
        <BoxItem tag={name}></BoxItem>
      </StyledHeader>
      <div ref={provided.innerRef} {...provided.droppableProps}>
        {images.map((image, index)=>{
          return(
          <DrugableBoxItem index={index} tag={image.author} key={image.id} id={image.id} url={image.download_url} onClick={()=>tagsDispatch.removeImageFromTag({tagId, imageId: image.id})}></DrugableBoxItem>
          )
        })}
        </div>
      </StyledCard>
       )}
       </Droppable>
    )
}
const StyledHeader = styled.div`
background-color: #${(props) => props.color};
`
const StyledCard = styled(Card)`
  width: 13rem;
  min-width: 13rem;
  height: 20rem;

`
const BoxList  = styled.div``
export default TaggedImagesBox