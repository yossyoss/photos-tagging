import styled from "@emotion/styled"
import {  useSelector } from 'react-redux'

import { RootState } from '../store'
import TaggedImagesBox from './TaggedImagesBox'
const TaggedImagesGrid = () => {
  const {tags}:any = useSelector((state: RootState) => state.gallery)
  return (
    <>
      {tags.length ? (
      <StyledContainer>
        {tags.map(tag=>{
           if(!tag.images.length)return null
          return (<TaggedImagesBox name={tag.name} key={tag.id} tagId={tag.id} color={tag.color} images={tag.images}></TaggedImagesBox>)
        })}
      </StyledContainer>) : null}
      </>
  )
}
const StyledContainer = styled.div`
  padding: 1em;
  overflow: auto;
  scroll-behavior: smooth;
  margin-top: 1em;
  overflow-x: scroll;
  scroll-behavior: smooth;
  border: none;
  gap: 10px;
  //border: 1px solid lightgray;
  display: flex;
`
export default TaggedImagesGrid