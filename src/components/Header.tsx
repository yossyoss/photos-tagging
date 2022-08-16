import styled from "@emotion/styled"
const Header = ({children}) => {
  return (
    <>
      <StyledLabel>
        {children}</StyledLabel>
    </>
  )
}
const StyledLabel = styled.div``
export default Header
