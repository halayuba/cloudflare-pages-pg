import { Container, Group, Stack, Text } from "@mantine/core"
import {
  IconBrandX,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react"

const FOOTER_LINKS = [
  "ABOUT",
  "FASHION",
  "TRAVEL",
  "DESIGN",
  "SPORTS",
  "STYLE GUIDE",
  "LICENSING",
  "CHANGELOG",
]
import classes from "../../assets/styles/Blog.module.css"

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container size='lg'>
        <Stack align='center' gap='xl'>
          <Text size='xl' fw={700}>
            PURPURA
          </Text>
          <Group gap={32}>
            {FOOTER_LINKS.map((link) => (
              <Text key={link} component='a' href='#' className={classes.text}>
                {link}
              </Text>
            ))}
          </Group>
          <Group gap='md'>
            <IconBrandX className={classes.icon} />
            <IconBrandFacebook className={classes.icon} />
            <IconBrandLinkedin className={classes.icon} />
          </Group>
          <Text size='sm' c='dimmed'>
            © 2024 All rights reserved
          </Text>
        </Stack>
      </Container>
    </footer>
  )
}
