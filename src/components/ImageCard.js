import styled from "@emotion/styled"
import Card from "react-bootstrap/Card"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTag } from "@fortawesome/free-solid-svg-icons"
library.add([faTag])

const ImageCard = () => {
  return (
    <StyledCard>
      <Card.Img src='https://picsum.photos/id/0/5616/3744' />
      <Card.Body>
        <Card.Title>
          <StyledSpan>Card Title </StyledSpan>
          <StyledSpan>
            <FontAwesomeIcon icon='fa-solid fa-tag' />
          </StyledSpan>
        </Card.Title>
      </Card.Body>
    </StyledCard>
  )
}
const StyledCard = styled(Card)`
  flex-basis: 12rem;
  padding: 0;
  border: none;
`
const StyledSpan = styled.span``
export default ImageCard
