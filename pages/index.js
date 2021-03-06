import styled from 'styled-components'
import { useRouter } from 'next/router'
import { homeImg, altcoinPicksImg, chartsImg, coinAnalysisImg } from '../images'
import { HiveIcon, TwitterIcon } from '../components'
import { externalLink } from '../common'

const HomePage = ({ posts }) => {
  const router = useRouter()
	return (
    <RootContainer>
      <CoverContainer img={homeImg}>
        <Headers>
          <H2>
            CCA Trading Group
          </H2>
          <H3>
            Charts, coin analysis, altcoin picks
          </H3>
        </Headers>
        <ButtonRow>
          <JoinUsButton onClick={() => router.push('/join')}>
            Join us
          </JoinUsButton>
        </ButtonRow>
        <Social>
          <SocialLink href='https://twitter.com/CryptoChartArt' onClick={(e) => externalLink({e, url: 'https://twitter.com/CryptoChartArt'})}>
            <TwitterIcon />
          </SocialLink>
          <SocialLink href='https://hive.blog/@cryptochartart' onClick={(e) => externalLink({e, url: 'https://hive.blog/@cryptochartart'})}>
            <HiveIcon />
          </SocialLink>
        </Social>
      </CoverContainer>
      <MainContainer>
        <ContentRow>
          <Image src={chartsImg}/>
          <TextColumn>
            <TextHeader>Crypto charts and posts</TextHeader>
            <Text>
              All relevant information about the crypto markets in one place.
              We are sharing facts from the past, opinions about the present and predictions about the future price movemenets.
            </Text>
          </TextColumn>
        </ContentRow>
        <ContentRow>
          <TextColumn>
            <TextHeader>In depth coin analysis</TextHeader>
            <Text>
              We give 100% in each of our anaylsis.
              It doesn't matter if you are a beginner or a veteran trader, you'll find something for yourself among the data we provide.</Text>
          </TextColumn>
          <Image src={coinAnalysisImg}/>
        </ContentRow>
        <ContentRow>
          <Image src={altcoinPicksImg}/>
          <TextColumn>
            <TextHeader>Profitable trading setups</TextHeader>
            <Text>
              Whether you want to sit in front on the screen daily, or just buy in and wait for the profit, we got you covered.
              We provide you with long term and short term trading plans.
            </Text>
          </TextColumn>
        </ContentRow>
      </MainContainer>
    </RootContainer>
  )
}

// export async function getStaticProps() {
// 	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`)
// 	  const posts = await res.json()
// 	  return {
// 		  props: {
// 			  posts
// 		  }
// 	  }
// }

// const postPreviews = posts.map((post, index) => {
//   return (
//     <PostPreview {...post} key={index} />
//   )
// })

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
  background-image: linear-gradient(0deg, #005cb26B, #1A1A1D), url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
`

const Headers = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
`

const ButtonRow = styled.div`
  width: 1100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const JoinUsButton = styled.button`
  color: white;
  border: 2px solid white;
  font-size: 20px;
  background-color: transparent;
  height: 60px;
  width: 300px;
  border-radius: 4px;
  text-transform: uppercase;
  display: block;
  margin-top: 20px;
  cursor: pointer;
  transition-property: color, background-color;
	transition-duration: 300ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: white;
    color: #005cb2;
  }
  &:active {
    transform: translateY(2px);
  }
`

const Social = styled.div`
  width: 116px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 50px;
  right: 50px;
`

const SocialLink = styled.a`
  cursor: pointer;
  &:active {
    transform: translateY(2px);
  }
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

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`

const ContentRow = styled.div`
  width: 1100px;
  height: min-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  &:first-of-type {
    margin-top: 0 !important;
  }
`

const Image = styled.img`
  width: 650px;
  object-fit: cover;
`

const TextColumn = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  padding: 50px;
`

const Text = styled.p`
  margin-top: 20px;
  text-align: start;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.2px;
  font-weight: 100;
`

const TextHeader = styled.h4`
  font-size: 30px;
  color: #005cb2;
`

export default HomePage
  