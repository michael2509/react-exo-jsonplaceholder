import { resolve } from "path";
import eslint from "vite-plugin-eslint";

export default {
  "root": resolve("sources"),
  "plugins": [
    eslint({
      "include": [
        resolve("sources", "**", "*.jsx"),
        resolve("sources", "**", "*.js")
      ]
    })
  ],
  "server": {
    "port": 8000,
    "host": "0.0.0.0"
  }
};
