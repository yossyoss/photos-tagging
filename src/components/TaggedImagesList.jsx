import styled from "@emotion/styled"
import Card from "react-bootstrap/Card"
// import Row from "react-bootstrap/Row"
// import BoxItem from "./BoxItem"
// import Header from './Header'

const TaggedImagesList = ({name}) => {
    const data = [{'tag1':[{'imag1':'data'},{'imag2':'data'}]}]
return (
    <StyledCard>
    {/* <Row className='text-center mb-2'>
        <Header>{images.length ? 'Available tags' : 'No Available tags'}</Header>
      </Row>
      {tags.map(tag=>{
        return(
        <BoxItem tag={tag.name} key={tag.id} id={tag.id} onClick={()=>tagsDispatch.removeTag(tag.id)}></BoxItem>
        )
      })} */}
      </StyledCard>
    )
}
const StyledCard = styled(Card)`
  width: 13rem;
  min-width: 13rem;
  height: 20rem;
  overflow-x: auto;
`
export default TaggedImagesList