import styled from "@emotion/styled"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import BoxItem from "./BoxItem"
import Header from './Header'

import { useDispatch, useSelector } from 'react-redux'

import { RootState, Dispatch } from '../store'

const TaggedImagesBox = ({name, tagId, color, images}) => {

  const { gallery: tagsDispatch } = useDispatch<Dispatch>()

 
return (
    <StyledCard  className="shadow bg-white rounded">
     <StyledHeader className='text-center'>
        <BoxItem tag={name} color={color}></BoxItem>
     </StyledHeader> 
      {images.map(image=>{
        return(
        <BoxItem tag={image.author} key={image.id} id={image.id} url={image.download_url} onClick={()=>tagsDispatch.removeImageFromTag({tagId, imageId: image.id})}></BoxItem>
        )
      })}
      </StyledCard>
    )
}


const StyledHeader = styled.div`

`
const StyledCard = styled(Card)`
  width: 13rem;
  min-width: 13rem;
  height: 20rem;

`
export default TaggedImagesBox