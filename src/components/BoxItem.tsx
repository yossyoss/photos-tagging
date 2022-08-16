import styled from "@emotion/styled"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"

library.add(faTrashCan)
type Tag = {
  tag:string
  url?:string
  id?:string
  color?:string
  onClick? : any
}

const BoxItem = ({tag, url, id, color, onClick}:Tag) => {
const hasBg = !url
  return (
    <StyledContainer className='p-2' color={color}>
      <StyledImageContainer>
        {url && <StyledImage>
          <Image src={url} alt={tag} />
        </StyledImage>}
        <StyledLabel hasBg={hasBg}>{tag}</StyledLabel>
      </StyledImageContainer>
      {id && <StyledIcon hasBg={hasBg}>
        <FontAwesomeIcon icon={['fas', 'trash-can']} onClick={onClick}/>
      </StyledIcon>}
    </StyledContainer>
  )
}
const StyledContainer = styled.div`
  background-color: rgba${(props) => props.color};
  word-break: break-word;
  display: flex;
  width: 100%;
`
const StyledImageContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
`
type Label = {
  hasBg?: boolean
}
const StyledLabel = styled.div<Label>`
  align-self: center;
  color: ${(props) => (props.hasBg ? '#231010' : null)} ;
  background: ${(props) => (props.hasBg ? '#f6d6d699' : null)};
  border-radius: 5px;
  padding: 0 5px;
`
const StyledImage = styled.div``
const Image = styled.img`
  width: 50px;
  height: 45px;
`
const StyledIcon = styled(StyledLabel)`
  cursor: pointer;
`

export default BoxItem
