import styled from "@emotion/styled"
import TagBox from "./TagBox"
const TagsGallery = () => {
return (
    <StyledMiniContainer>
        <TagBox></TagBox>
        <TagBox></TagBox>
        <TagBox></TagBox>
        <TagBox></TagBox>
        <TagBox></TagBox>
        <TagBox></TagBox>
        <TagBox></TagBox>
    </StyledMiniContainer>
)
}
const StyledMiniContainer = styled.div`
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
export default TagsGallery