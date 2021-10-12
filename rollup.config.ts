import resolve from "@rollup/plugin-node-resolve";
import sourcemaps from "rollup-plugin-sourcemaps";

export default {
  input: {
    index: "./react/index",
  },
  output: [
    {
      dir: "react-dist/",
      entryFileNames: "[name].js",
      chunkFileNames: "[name]-[hash].js",
      format: "es",
      sourcemap: true,
    },
    
  ],
  external: (id) => !/^(\.|\/)/.test(id),
  plugins: [
    resolve(),
    sourcemaps(),
  ],
};