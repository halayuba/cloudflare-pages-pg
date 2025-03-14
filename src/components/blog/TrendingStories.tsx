import { Stack, Title, Card, Image, Text } from "@mantine/core"
import { Article } from "../../utils/types/article"

import classes from "../../assets/styles/Blog.module.css"

interface TrendingStoriesProps {
  articles: Article[]
}

export function TrendingStories({ articles }: TrendingStoriesProps) {
  return (
    <Stack>
      <Title order={3}>TRENDING STORIES</Title>
      <Stack gap='xl'>
        {articles.map((article) => (
          <Card key={article.id} p={0} className={classes.card}>
            <Image src={article.image} height={240} alt={article.title} />
            <Stack gap='xs' p='lg'>
              <Text size='sm' c='dimmed'>
                {article.date} • {article.category}
              </Text>
              <Text
                component='a'
                href='#'
                size='lg'
                fw={600}
                className={classes.text}
              >
                {article.title}
              </Text>
              <Text c='dimmed'>{article.excerpt}</Text>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Stack>
  )
}
