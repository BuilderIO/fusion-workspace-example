import { Banner, KIND } from "baseui/banner";
import { Button } from "baseui/button";
import { Card, StyledAction, StyledBody } from "baseui/card";
import { ToasterContainer } from "baseui/toast";
import { HeadingXXLarge, ParagraphMedium } from "baseui/typography";

function HomePage(): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100vh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <HeadingXXLarge>Hello World!</HeadingXXLarge>
        <ParagraphMedium>
          Welcome to our simple React app with React Router and BaseUI
        </ParagraphMedium>

        <Card
          overrides={{
            Root: {
              style: {
                marginTop: "2rem",
                textAlign: "left",
              },
            },
          }}
          title="BaseUI Components"
        >
          <StyledBody>
            Here are some example BaseUI components working in your app:
          </StyledBody>
          <StyledAction>
            <Button>Primary Button</Button>
            <Button
              kind="secondary"
              overrides={{ Root: { style: { marginLeft: "1rem" } } }}
            >
              Secondary Button
            </Button>
            <Button
              kind="tertiary"
              overrides={{ Root: { style: { marginLeft: "1rem" } } }}
            >
              Tertiary Button
            </Button>
          </StyledAction>
        </Card>

        <div style={{ marginTop: "1rem" }}>
          <Banner kind={KIND.positive}>
            BaseUI has been successfully installed and is working!
          </Banner>
        </div>
      </div>
      <ToasterContainer />
    </div>
  );
}

export default HomePage;
