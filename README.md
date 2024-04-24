## Getting Started

First, Install node modules:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Note

The transaction endpoint provided doesn't provide support for query params, Hence the reason why the filter modal is not functional
Tried this endpoint but it didn't work

```bash
https://fe-task-api.mainstack.io/?type=withdraw
```

The above is also the reason why I didn't do the Empty transaction screen, If I do, there will be no way to get to show the empty screen

The app uses the following technologies:

- NextJS
- Redux Toolkit for Http requests
- Jest for testing
  **Not All cases are covered, I only covered some parts that can also be applicable to other parts of the app**
