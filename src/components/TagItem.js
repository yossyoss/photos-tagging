import styled from "@emotion/styled"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
library.add([faTrashCan])

const TagItem = () => {
  return (
    <StyledContainer className='p-2'>
      <StyledImageContainer>
        <StyledImage>
          <Image src={"https://picsum.photos/id/0/5616/3744"} alt='test' />
        </StyledImage>
        <StyledLabel>label</StyledLabel>
      </StyledImageContainer>
      <StyledIcon>
        <FontAwesomeIcon icon='fa-solid fa-trash-can' />
      </StyledIcon>
    </StyledContainer>
  )
}
const StyledContainer = styled.div`
  display: flex;
  width: 100%;
`
const StyledImageContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
`
const StyledLabel = styled.div`
  align-self: center;
`
const StyledImage = styled.div``
const Image = styled.img`
  width: 50px;
  height: 45px;
`
const StyledIcon = styled(StyledLabel)`
  cursor: pointer;
`

export default TagItem
