import styled from "@emotion/styled"
import BoxItem from "./BoxItem"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'

import { RootState, Dispatch } from '../store'
const TagsList = () => {
  const {tags}:any = useSelector((state: RootState) => state.tags)
  const { tags: tagsDispatch } = useDispatch<Dispatch>()
  return (
    <StyledCard>
      <Row className='text-center mb-2'>
        <Header>{tags.length ? 'Available tags' : 'No Available tags'}</Header>
      </Row>
      {tags.map(tag=>{
        return(
        <BoxItem tag={tag.name} key={tag.id} id={tag.id} onClick={()=>tagsDispatch.removeTag(tag.id)} color={tag.color}></BoxItem>
        )
      })}
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  width: 13rem;
  min-width: 13rem;
  height: 20rem;
  overflow-x: auto;
`
export default TagsList
