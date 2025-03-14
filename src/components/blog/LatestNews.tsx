import { Stack, Title, Group, Text } from "@mantine/core"

import classes from "@/assets/styles/Blog.module.css"

interface LatestNewsItemProps {
  id?: string
  date: string
  category: string
  title: string
}

function LatestNewsItem({ date, category, title }: LatestNewsItemProps) {
  return (
    <Group>
      <Text size='sm' c='dimmed'>
        {date} • {category}
      </Text>
      <Text component='a' href='#' className={classes.text}>
        {title}
      </Text>
    </Group>
  )
}

interface LatestNewsProps {
  articles: LatestNewsItemProps[]
}

export function LatestNews({ articles }: LatestNewsProps) {
  return (
    <Stack>
      <Title order={3}>LATEST NEWS</Title>
      <Stack gap='md'>
        {articles.map((article) => (
          <LatestNewsItem
            key={article.id}
            date={article.date}
            category={article.category}
            title={article.title}
          />
        ))}
      </Stack>
    </Stack>
  )
}
