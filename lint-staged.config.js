module.exports = {
  '*.{js,jsx,ts,tsx,yml,yaml,md,json}': ['prettier --write'],
  '*.{js,jsx,ts,tsx,json}': ['eslint --fix'],
};
