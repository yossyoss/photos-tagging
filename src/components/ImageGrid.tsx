import Header from "./Header"
import Row from "react-bootstrap/Row"
import ImageCard from "./ImageCard"
import styled from "@emotion/styled"
import { useDispatch, useSelector } from 'react-redux'
import { RootState, Dispatch } from '../store'
import {Image} from '../utils/types'

const ImageGrid = () => {
  const {images, tags}:any = useSelector((state: RootState) => state.gallery)
  const unTaggedImages = images.filter(image=>{
    let test =[]
    tags.map(tag=> {
      let taggedImage = tag.images.find(tagImage=> tagImage.id === image.id)
      if(taggedImage)test.push(taggedImage)
    })
    if(test.length)return false
    return true
  })
    return (
        <StyledContainer>
            <Row className='mb-2'>
              <Header>Unassigned</Header>
            </Row>
            <StyledGallery>
              {unTaggedImages.map((image:Image)=>{
                return(
                  <StyledImageCard key={image.id} id={image.id} title={image.author} url={image.download_url}></StyledImageCard>
                )
              })}
            </StyledGallery>
          </StyledContainer>
    )
}

const StyledImageCard = styled(ImageCard)`
  margin: 1px;
`
const StyledContainer = styled.div`
  height: 500px;
  border: 1px solid lightgray;
  padding: 1em;
  overflow: auto;
  scroll-behavior: smooth;
`
const StyledGallery = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  margin-left: 1em;
  gap: 10px;
`
export default ImageGrid