import styled from "@emotion/styled"
import {  useSelector } from 'react-redux'

import { RootState } from '../store'
import TaggedImagesList from './TaggedImagesList'
const TaggedImagesGallery = () => {
  const {tags}:any = useSelector((state: RootState) => state.tags)
  return (
      <StyledContainer>
        {tags.map(tag=>(<TaggedImagesList name={tag.name} key={tag.id}></TaggedImagesList>))}
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
export default TaggedImagesGallery