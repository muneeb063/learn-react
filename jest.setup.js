// jest.setup.js
const { TextEncoder, TextDecoder } = require("util");

// Define globals for libraries that expect Web APIs (react-router, etc.)
global.TextEncoder = global.TextEncoder || TextEncoder;
global.TextDecoder = global.TextDecoder || TextDecoder;
