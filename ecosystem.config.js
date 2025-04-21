module.exports = {
    apps: [
      {
        name: "chatbot-ui",
        cwd: "C:\\Users\\EshaSharma\\source\\repos\\VisaGenie\\VisaGenie.Web", // cwd: Path to the directory where your Next.js AI Chatbot project is located.
        script: "node",
        args: "./node_modules/next/dist/bin/next start",
        env: {
          NODE_ENV: "production",
        },
      },
      {
        name: "chatbot-dev",
        cwd: "C:\\Users\\EshaSharma\\source\\repos\\VisaGenie\\VisaGenie.Web",// cwd: Path to the directory where your Next.js AI Chatbot project is located.
        script: "node",
        args: "./node_modules/next/dist/bin/next dev",
        env: {
          NODE_ENV: "development",
        },
      },
      {
        name: "chroma",
        script: "chroma",
        args: "run",
        cwd: "D:\\Downloads\\ChromaDB\\ChromaDB", // cwd: Path to the directory where your Chromadb is located to run.
        watch: false,
      },
    ],
  };
   