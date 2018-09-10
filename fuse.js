const path = require('path')
const fb = {
  FuseBox, CopyPlugin, QuantumPlugin,
  LESSPlugin, CSSPlugin,
} = require('fuse-box')

const production = process.env.NODE_ENV === 'production'
      || process.env.ENV === 'production'
      || process.argv.includes('--production')

const fuse = FuseBox.init({
  homeDir: 'frontend',
  output: 'public/$name.js',
  useTypescriptCompiler: true,
  sourceMaps:true,
  plugins: [
    CSSPlugin()
    ,
    production && QuantumPlugin({
      bakeApiIntoBundle: 'app',
      treeshake: true,
      uglify: true
    })
  ]
})

const bundle = fuse.bundle('app')
  .instructions('> main.js')

if (!production) {
  fuse.dev({ port: 4444, fallback: 'index.html' })
  bundle.hmr().watch()
}

fuse.run()
