import styled from "@emotion/styled"
import BoxItem from "./BoxItem"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'

import { RootState, Dispatch } from '../store'
const TagsBox = () => {
  const {tags}:any = useSelector((state: RootState) => state.gallery)
  const { gallery: tagsDispatch } = useDispatch<Dispatch>()
  return (
    <StyledCard className="shadow-sm bg-white rounded">
      <StyledHeader className='text-center mb-2'>
        <Header>{tags.length ? 'Available tags' : 'No Available tags'}</Header>
      </StyledHeader>
      {tags.map(tag=>{
        return(
        <BoxItem tag={tag.name} key={tag.id} id={tag.id} onClick={()=>tagsDispatch.removeTag(tag.id)} color={tag.color}></BoxItem>
        )
      })}
    </StyledCard>
  )
}

const StyledCard = styled.div`
  width: 13rem;
  min-width: 13rem;
  height: 20rem;
  overflow-x: auto;
`
const StyledHeader = styled.div`
position: sticky;
top: 0;
background-color: white;
padding: 0.5rem;
`
export default TagsBox
