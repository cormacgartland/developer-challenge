# Actual Size Developer Challenge

Recreate this page, using Gatsby & React (with functional components and hooks): [https://www.figma.com/file/ARH3Q3Te8kXJ5w9JdK8IdO/Dev-Challenge?node-id=0%3A1](https://www.figma.com/file/ARH3Q3Te8kXJ5w9JdK8IdO/Dev-Challenge?node-id=0%3A1)

## Instructions

1. Fork this repo, then clone the fork to your machine.
2. Install dependencies. (Use `yarn` if you run into any peer-dependency issues.)
3. Start the development server with the defined `start` script.
4. Build the challenge page according to the provided specifications.
5. Issue a Pull Request on the original repo with your submission.

## Notes

-   Use the existing Prismic data source for the prop-fed data on the Card component. An simple example of usage is on the starter page. You'll probably want to use the GraphiQL explorer (available by default at http://localhost:8000/___graphql).
-   The required Google Fonts have been pre-loaded via Gatsby config. You can simply refer to them by name in your styles.
-   The layout should be designed around an iPhone 11 Pro Max’s screen size. Components should not scale responsively, but they should remain anchored to their page constraints as the window changes size.
-   The button should trigger a callback passed to the high-level Card component (that callback should simply fire a console log).
-   The active Nav item should change when a new one is clicked on the Nav bar. The contents of the Card component should change when the active Nav item changes. Don’t worry about designing the User and Cart pages; just console log when they’re clicked.

## Other things I'm looking for

-   Great comments & documentation
-   [Clean code](https://github.com/ryanmcdermott/clean-code-javascript)

## Rules

1. **Don't spend more than four hours on this challenge.**

2. **Google whatever you want. Ask as many questions as you need.**

3. **Ensure the entire project is linted and error-free according the `.eslintrc`.**

    ESLint & Prettier have already been included in the projects devDependencies. Prettier formatting will happen automatically whenever ESLint fixing is run, thanks to `eslint-config-prettier`.

    To use ESLint in VSCode, [install the `vscode-eslint` plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) from the VSCode Marketplace. Then use the following settings within your project's `settings.json`:

    ```json
    {
    	"files.autoSave": "onFocusChange",
    	"eslint.debug": true,
    	"editor.codeActionsOnSave": {
    		"source.fixAll.eslint": true
    	},
    	"eslint.run": "onType"
    }
    ```
