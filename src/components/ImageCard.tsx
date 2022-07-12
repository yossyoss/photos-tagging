import styled from "@emotion/styled"
import Card from "react-bootstrap/Card"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTag } from "@fortawesome/free-solid-svg-icons"
library.add(faTag)

const ImageCard = () => {
  return (
    <StyledCard>
      <Card.Img src='https://picsum.photos/id/0/5616/3744' />
      <Card.Body>
        <StyledTitle>
          <StyledDiv>Card Title </StyledDiv>
          <StyledDiv>
            <FontAwesomeIcon icon={['fas', 'tag']} />
          </StyledDiv>
        </StyledTitle>
      </Card.Body>
    </StyledCard>
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
export default ImageCard
