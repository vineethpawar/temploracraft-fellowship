# Exercise 07 · Use the design system

**This card is 60 lines of hand-rolled styles. Rebuild it with @plyxui primitives and delete the CSS.**

Teaches: What a component library is actually for.

Open `src/App.tsx`. The instructions are in the comment at the top.

You have about 8 minutes. Use AI if you want — but read what it gives
you, because the next exercise builds on understanding this one.

<details>
<summary><b>Stuck? The answer</b></summary>

```tsx
import { Box, Button, Stack, Text } from "@plyxui/primitives";

<Box padding="lg" radius="lg" border surface>
  <Stack gap="xs">
    <Text weight="bold" size="lg">Ananya Rao</Text>
    <Text tone="muted" size="sm">Product Manager · Fintech</Text>
  </Stack>
  <Text tone="muted" size="sm">Score 88 · Meridian template</Text>
  <Button>Open</Button>
</Box>

// Check the exact prop names against the plyxui docs — the point of the
// exercise is reading a component library, not memorising this snippet.
```

</details>
