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
}
const TagItem = ({tag, url}:Tag) => {
  const { tags: tagsDispatch } = useDispatch<Dispatch>()
  return (
    <StyledContainer className='p-2'>
      <StyledImageContainer>
        {url && <StyledImage>
          <Image src={"https://picsum.photos/id/0/5616/3744"} alt='test' />
        </StyledImage>}
        <StyledLabel>{tag}</StyledLabel>
      </StyledImageContainer>
      <StyledIcon>
        <FontAwesomeIcon icon={['fas', 'trash-can']} onClick={()=>tagsDispatch.removeTag(tag)}/>
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
