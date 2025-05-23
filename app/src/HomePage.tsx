import React from "react";
import { Button, Card, Alert, Text } from "@grafana/ui";

function HomePage(): JSX.Element {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <Text element="h1" variant="h1">
        Hello World!
      </Text>
      <Text element="p" variant="body">
        Welcome to our simple React app with React Router and Grafana UI
      </Text>

      <Card style={{ marginTop: "2rem", textAlign: "left" }}>
        <Card.Heading>Grafana UI Components</Card.Heading>
        <Card.Description>
          Here are some example Grafana UI components working in your app:
        </Card.Description>

        <Card.Actions>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="destructive">Destructive Button</Button>
        </Card.Actions>
      </Card>

      <div style={{ marginTop: "1rem" }}>
        <Alert title="Success!" severity="success">
          Grafana UI has been successfully installed and is working!
        </Alert>
      </div>
    </div>
  );
}

export default HomePage;
