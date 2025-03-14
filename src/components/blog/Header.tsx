import { Group, Container, Text } from "@mantine/core"
import { Search } from "lucide-react"

import classes from "../../assets/styles/Blog.module.css"

const HEADER_LINKS = ["ABOUT", "FASHION", "TRAVEL", "DESIGN", "SPORTS"]

export function Header() {
  return (
    <header className={classes.header}>
      <Container size='lg'>
        <Group justify='space-between' align='center'>
          <Text size='xl' fw={700}>
            PURPURA
          </Text>
          <Group gap={32}>
            {HEADER_LINKS.map((link) => (
              <Text key={link} component='a' href='#' className={classes.text}>
                {link}
              </Text>
            ))}
          </Group>
          <Search className={classes.search} />
        </Group>
      </Container>
    </header>
  )
}
