module.exports = {
  env: {
    browser: false,
    node: true,
    es2021: true
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module"
  },
  rules: {
    // project-specific rules can be added here
  }
};
