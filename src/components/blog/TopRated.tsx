import { Stack, Title, Card, Image, Text } from "@mantine/core"
import { Article } from "../../utils/types/article"

import classes from "../../assets/styles/Blog.module.css"

interface TopRatedProps {
  articles: Article[]
}

export function TopRated({ articles }: TopRatedProps) {
  return (
    <Stack>
      <Title order={3}>TOP RATED</Title>
      <Stack gap='md'>
        {articles.map((article) => (
          <Card key={article.id} p={0} className={classes.card}>
            <Image src={article.image} height={120} alt={article.title} />
            <Stack gap='xs' p='sm'>
              <Text size='sm' c='dimmed'>
                {article.date} • {article.category}
              </Text>
              <Text component='a' href='#' fw={500} className={classes.text}>
                {article.title}
              </Text>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Stack>
  )
}
