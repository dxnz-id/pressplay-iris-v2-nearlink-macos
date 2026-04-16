// main.cjs - CommonJS entry point for Electron ESM app
(async () => {
  try {
    await import('./main.js');
  } catch (err) {
    console.error('Failed to load main.js:', err);
    process.exit(1);
  }
})();