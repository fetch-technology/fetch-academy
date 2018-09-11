const path = require('path')
const fb = {
  FuseBox, CopyPlugin, QuantumPlugin,
  LESSPlugin, CSSPlugin, CSSResourcePlugin
} = require('fuse-box')
const fs = require('fs-extra')
const production = process.env.NODE_ENV === 'production'
  || process.env.ENV === 'production'
  || process.argv.includes('--production')

const fuse = FuseBox.init({
  homeDir: 'frontend',
  output: 'public/$name.js',
  useTypescriptCompiler: true,
  sourceMaps: true,
  plugins: [
    // CSSResourcePlugin({inline:false}),
    CSSPlugin({ group: 'app.css' ,outFile: 'public/app.css', inject: false }),
    production && QuantumPlugin({
      bakeApiIntoBundle: 'app',
      treeshake: true,
      uglify: true
    })
  ]
})


fs.copy('frontend/assets/fonts/feather','public/fonts')
const bundle = fuse.bundle('app')
  .instructions('> main.js')

if (!production) {
  fuse.dev({ port: 4444, fallback: 'index.html' })
  bundle.hmr().watch()
}

fuse.run()
