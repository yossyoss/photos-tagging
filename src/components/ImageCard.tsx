import styled from "@emotion/styled"
import Card from "react-bootstrap/Card"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTag } from "@fortawesome/free-solid-svg-icons"
library.add(faTag)

const ImageCard = ({title, url}) => {
  return (
    <StyledCard>
      <Card.Img src={url} />
      <Card.Body>
        <StyledTitle>
          <StyledDiv>{title}</StyledDiv>
          <StyledIcon>
            <FontAwesomeIcon icon={['fas', 'tag']} />
          </StyledIcon>
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
const StyledIcon = styled.div`
cursor:pointer;
`
export default ImageCard
