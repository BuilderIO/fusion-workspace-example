import { useState, useEffect } from "react";
import { Button } from "baseui/button";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Banner, KIND } from "baseui/banner";
import {
  HeadingXXLarge,
  HeadingLarge,
  ParagraphMedium,
} from "baseui/typography";
import { Table } from "baseui/table";
import { Spinner } from "baseui/spinner";
import { Block } from "baseui/block";
import { toaster, ToasterContainer } from "baseui/toast";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  location: {
    city: string;
    country: string;
  };
  picture: {
    thumbnail: string;
  };
  login: {
    uuid: string;
  };
}

function HomePage(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://randomuser.me/api/?results=10");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data.results);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred",
      );
      toaster.negative("Failed to fetch users. Please try again later.", {});
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const refreshUsers = () => {
    fetchUsers();
    toaster.positive("User data refreshed!", {});
  };

  // Transform user data into format expected by the Table component
  const tableData = users.map((user) => [
    <div className="user-name" key={user.login.uuid}>
      <img
        src={user.picture.thumbnail}
        alt={`${user.name.first} ${user.name.last}`}
        style={{
          borderRadius: "50%",
          marginRight: "10px",
          verticalAlign: "middle",
        }}
      />
      {`${user.name.first} ${user.name.last}`}
    </div>,
    user.email,
    user.phone,
    `${user.location.city}, ${user.location.country}`,
  ]);

  const tableColumns = ["Name", "Email", "Phone", "Location"];

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

        <Block marginTop="2rem">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <HeadingLarge>Random Users</HeadingLarge>
            <Button onClick={refreshUsers} disabled={isLoading}>
              Refresh Users
            </Button>
          </div>

          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "3rem",
              }}
            >
              <Spinner />
            </div>
          ) : error ? (
            <Banner kind={KIND.negative}>{error}</Banner>
          ) : (
            <div className="user-table-container">
              <Table
                columns={tableColumns}
                data={tableData}
                overrides={{
                  Root: {
                    style: {
                      maxWidth: "100%",
                    },
                  },
                }}
              />
            </div>
          )}
        </Block>
      </div>
      <ToasterContainer />
    </div>
  );
}

export default HomePage;
