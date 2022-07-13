import styled from "@emotion/styled"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from 'react-redux'

import {  Dispatch } from '../store'
library.add(faTrashCan)
type Tag = {
  tag:string
  url?:string
  id?:string
  color?:string
  onClick? : any
}
const BoxItem = ({tag, url, id, color, onClick}:Tag) => {
  
  return (
    <StyledContainer className='p-2' color={color}>
      <StyledImageContainer>
        {url && <StyledImage>
          <Image src={url} alt={tag} />
        </StyledImage>}
        <StyledLabel>{tag}</StyledLabel>
      </StyledImageContainer>
      {id && <StyledIcon>
        <FontAwesomeIcon icon={['fas', 'trash-can']} onClick={onClick}/>
      </StyledIcon>}
    </StyledContainer>
  )
}
const StyledContainer = styled.div`
  background-color: #${(props: any) => props.color};
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

export default BoxItem
