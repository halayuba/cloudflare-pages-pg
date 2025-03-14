import { Container, Grid, Center } from "@mantine/core"

import { Header } from "@/components/blog/Header"
import { LatestNews } from "@/components/blog/LatestNews"
import { TopRated } from "@/components/blog/TopRated"
import { FeaturedArticle } from "@/components/blog/FeaturedArticle"
import { TrendingStories } from "@/components/blog/TrendingStories"
import { Footer } from "@/components/blog/Footer"

import {
  LATEST_NEWS,
  TOP_RATED,
  FEATURED_ARTICLE,
  TRENDING_STORIES,
} from "@/components/blog/data"

function App() {
  return (
    <>
      <Header />
      <Center>
        <Container size='lg' py='lg'>
          <Grid gutter='xl' mt='lg'>
            <Grid.Col span={3}>
              <LatestNews articles={LATEST_NEWS} />
            </Grid.Col>
            <Grid.Col span={6}>
              <FeaturedArticle article={FEATURED_ARTICLE} />
              <div style={{ marginTop: "2rem" }}>
                <TrendingStories articles={TRENDING_STORIES} />
              </div>
            </Grid.Col>
            <Grid.Col span={3}>
              <TopRated articles={TOP_RATED} />
            </Grid.Col>
          </Grid>
        </Container>
      </Center>
      <Footer />
    </>
  )
}

export default App
