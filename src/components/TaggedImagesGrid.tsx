import styled from "@emotion/styled"
import {  useSelector } from 'react-redux'

import { RootState } from '../store'
import TaggedImagesBox from './TaggedImagesBox'
const TaggedImagesGrid = () => {
  const {tags}:any = useSelector((state: RootState) => state.gallery)
  return (
      <StyledContainer>
        {tags.map(tag=>(<TaggedImagesBox name={tag.name} key={tag.id} tagId={tag.id} color={tag.color} images={tag.images}></TaggedImagesBox>))}
      </StyledContainer>
  )
}
const StyledContainer = styled.div`
  padding: 1em;
  overflow: auto;
  scroll-behavior: smooth;
  margin-top: 1em;
  overflow-x: scroll;
  scroll-behavior: smooth;
  height: 350px;
  border: none;
  gap: 10px;
  border: 1px solid lightgray;
  display: flex;
`
export default TaggedImagesGrid