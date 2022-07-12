import styled from "@emotion/styled"
import TagItem from "./TagItem"
import Card from "react-bootstrap/Card"
import { useDispatch, useSelector } from 'react-redux'

import { RootState, Dispatch } from '../store'
const TagBox = () => {
  const {tags}:any = useSelector((state: RootState) => state.tags)
  return (
    <StyledCard>
      {tags.map(tag=>{
        return(<TagItem tag={tag}></TagItem>)
      })}
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
