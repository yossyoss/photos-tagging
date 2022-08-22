import styled from "@emotion/styled"
import BoxItem from "./BoxItem"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Header from './Header'
import useScroll from '../hooks/useScroll'
import { useDispatch, useSelector } from 'react-redux'

import { RootState, Dispatch } from '../store'
const TagsBox = () => {
  const {tags}:any = useSelector((state: RootState) => state.gallery)
  const [onScrollEvent, isScrolledToTop, isScrolledToBottom] = useScroll()
  const { gallery: tagsDispatch } = useDispatch<Dispatch>()
  return (
    <>
    <StyledCard className="shadow-sm bg-white rounded">
      <StyledHeader className='text-center mb-2'>
        <Header>{tags.length ? 'Available tags' : 'No Available tags'}</Header>
      </StyledHeader>

      {tags.map(tag=>{
        return(
        <BoxItem tag={tag.name} key={tag.id} id={tag.id} onClick={()=>tagsDispatch.removeTag(tag.id)} color={tag.color}></BoxItem>
        )
      })}
     {!isScrolledToBottom && <BoundingBoxBottomShade />}
    </StyledCard>
    
    </>
  )
}

// const BoundingBoxTopShade = styled.div`
//   width: 100%;
//   height: 24px;
//   position: sticky;
//   bottom: 0;
//   background-image: linear-gradient(
//     to top,
//     rgba(255, 255, 255, 0) 69%,
//     rgba(255, 255, 255, 0) 45%,
//     rgba(0, 0, 0, 0.08)
//   );
//   @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
//     width: calc(100% - 17px);
//     z-index: 2;
//   }
// `

const BoundingBoxBottomShade = styled.div`
  width: 100%;
  height: 10px;
  position: sticky;
    bottom: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(245, 248, 247, 0.5),
    #f5f8f7
  );
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    width: calc(100% - 17px);
    z-index: 2;
  }
`

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
