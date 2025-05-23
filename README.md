# Fusion Workspace Example

This repo demonstrates using Builder Fusion across [multiple repositories](https://www.builder.io/c/docs/projects#multi-repository-workspaces), for instance a Storybook repo to understand a custom design system and an app to output new UIs into using that design system.

The design system is in the [`storybook`](./storybook) folder and the app is in the [`app`](./app) folder. See [`AGENT.md`](./AGENT.md) for additional instructions we give the Fusion agent.

See [`fusion.config.json`](./fusion.config.json) for the [configuration of the Fusion workspace](https://www.builder.io/c/docs/projects#using-fusion-config-json).

## Running Fusion

To launch, you'll need to install dependencies in the app

```
cd app && npm install
```

Then, you can launch Fusion from the workspace root with the following command:

```
npx builder.io@latest launch
```
