import styled from "@emotion/styled"
import TagItem from "./TagItem"
import Card from "react-bootstrap/Card"
const TagBox = () => {
  return (
    <StyledCard>
      <TagItem></TagItem>
      <TagItem></TagItem>
      <TagItem></TagItem>
      <TagItem></TagItem>
      <TagItem></TagItem>
      <TagItem></TagItem>
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  width: 13rem;
  min-width: 13rem;
  height: 20rem;
  overflow: auto;
`
export default TagBox
