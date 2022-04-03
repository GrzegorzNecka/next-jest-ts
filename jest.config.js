/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
// };

// jest.config.js
const nextJest = require("next/jest");

// Providing the path to your Next.js app which will enable loading next.config.js and .env files

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: "./",
});
// Any custom config you want to pass to Jest
const customJestConfig = {
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect", "@testing-library/react"],
    moduleNameMapper: {
        // Handle module aliases (this will be automatically configured for you soon)
        "^@/components/(.*)$": "<rootDir>/components/$1",

        "^@/pages/(.*)$": "<rootDir>/pages/$1",
    },
    moduleDirectories: ["node_modules", "<rootDir>/"],
    // testEnvironment: "node",
    testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
