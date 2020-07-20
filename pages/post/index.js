import styled from 'styled-components'
import { postsImg } from '../../images'
import { PostList } from '../../post'

const HomePage = () => {
	return (
    <RootContainer>
      <CoverContainer img={postsImg}>
        <Headers>
          <H2>
            Always fresh cryptocurrency posts
          </H2>
          <H3>
            TA, price predictions, comments
          </H3>
        </Headers>

      </CoverContainer>
      <PostList />
    </RootContainer>
  )
}

const RootContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CoverContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(0deg, #005cb24B, #1A1A1D), url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Headers = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
`

const H2 = styled.h2`
  color: white;
  font-size: 50px;
`

const H3 = styled.h3`
  color: white;
  font-size: 35px;
  font-weight: 100;
`

export default HomePage
  