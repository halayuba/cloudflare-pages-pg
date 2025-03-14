import { Card, Image, Text, Stack } from "@mantine/core"
import { Article } from "../../utils/types/article"

import classes from "../../assets/styles/Blog.module.css"

interface FeaturedArticleProps {
  article: Article
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <Card p={0} className={classes.card}>
      <Image src={article.image} height={400} alt={article.title} />
      <Stack gap='xs' p='lg'>
        <Text size='sm' c='dimmed'>
          {article.date} • {article.category}
        </Text>
        <Text
          component='a'
          href='#'
          size='xl'
          fw={700}
          className={classes.text}
        >
          {article.title}
        </Text>
        <Text c='dimmed'>{article.excerpt}</Text>
      </Stack>
    </Card>
  )
}
