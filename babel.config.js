const esm = !!process.env.ESM


export default {
  presets: [
    ['@babel/preset-env', {
      modules: esm ? false : undefined,
      loose: true,
    }],
  ],
}
