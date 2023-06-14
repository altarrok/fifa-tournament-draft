# FIFA Tournament Draft

This is a web application developed using Next.js and TypeScript. It's designed to manage and host FIFA23 Draft Tournaments.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the latest versions of Node and npm installed. You can verify by running:

```
node -v
npm -v
```

### Installation

Clone the repository:

```
git clone git@github.com:altarrok/fifa-tournament-draft.git
cd fifa-tournament-draft
```

Install the dependencies:

```
npm install
```

Run the application in the development mode:

```
npm run dev
```

Now open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## CSV Upload

To upload player data, you need a CSV file specifically formatted with the following headers:

- picture (string)
- Flag (string)
- Name (string)
- Age (number)
- Position (enum)
- Overall (number)
- Team_Image (string)
- Team (string)

Please ensure that the CSV is correctly formatted to prevent any upload errors.

You may find players from platforms such as SoFIFA

## Available Scripts

- `build`: Builds the application for production usage
- `dev`: Runs the application in the development mode
- `lint`: Runs the linter to check code quality
- `start`: Starts the application in production mode

## Built With

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [React Table](https://tanstack.com/react-table/)
- [Zod](https://www.npmjs.com/package/zod)
