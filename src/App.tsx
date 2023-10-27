import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Welcome } from "./Welcome/Welcome";

export default function App() {
  return (
    <MantineProvider defaultColorScheme={'dark'} theme={theme}>
      <Welcome />
    </MantineProvider>
  );
}
