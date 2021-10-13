import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import HighlightSection from "./components/HighlightSection";
import Layout from "./components/Layout";
import theme from "./theme";

import sedanIcon from "./assets/img/icon-sedans.svg";
import luxuryIcon from "./assets/img/icon-luxury.svg";
import suvsIcon from "./assets/img/icon-suvs.svg";
import Container from "./components/Container";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Container>
          <HighlightSection>
            <Card
              title="Sedans"
              color={theme.color.primary.orange}
              icon={sedanIcon}
            >
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </Card>
            <Card
              title="SUVs"
              color={theme.color.primary.darkCyan}
              icon={suvsIcon}
            >
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </Card>
            <Card
              title="Luxury"
              color={theme.color.primary.veryDarkCyan}
              icon={luxuryIcon}
            >
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </Card>
          </HighlightSection>
        </Container>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
