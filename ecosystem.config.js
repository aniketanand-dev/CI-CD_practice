module.exports = {
  apps: [
    {
      name: "my-node-app",
      script: "index.js",
      cwd: __dirname,
      instances: 1,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
