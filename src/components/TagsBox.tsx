import styled from "@emotion/styled"
import BoxItem from "./BoxItem"
import Header from './Header'
import useScroll from '../hooks/useScroll'
import { useDispatch, useSelector } from 'react-redux'

import { RootState, Dispatch } from '../store'
const TagsBox = () => {
  const {tags}:any = useSelector((state: RootState) => state.gallery)
  const [onScrollEvent, isScrolledToBottom] = useScroll()
  const { gallery: tagsDispatch } = useDispatch<Dispatch>()
 
  return (
    <>
     <BoundingBoxTopShade />
    <StyledCard className="shadow-sm bg-white rounded" 
    // @ts-expect-error 
    onScroll={onScrollEvent}>
      
      <StyledHeader className='text-center'>
        <Header>{tags.length ? 'Available tags' : 'No Available tags'}</Header>
      </StyledHeader>
      
      {tags.map(tag=>{
        return(
        <BoxItem tag={tag.name} key={tag.id} id={tag.id} onClick={()=>tagsDispatch.removeTag(tag.id)} color={tag.color}></BoxItem>
        )
      })}
     
    </StyledCard>
    {!isScrolledToBottom && <BoundingBoxBottomShade/>}
    </>
  )
}

const BoundingBoxTopShade = styled.div`
width: calc(100% - 30px);
height: 10px;
position: -webkit-sticky;
position: relative;
top: 50px;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0) 69%,
    rgba(255, 255, 255, 0) 45%,
    rgba(0, 0, 0, 0.08)
  );
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    width: calc(100% - 17px);
    z-index: 2;
  }
`

const BoundingBoxBottomShade = styled.div`
width: calc(100% - 30px);
height: 10px;
position: -webkit-sticky;
position: relative;
bottom: 10px;
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
