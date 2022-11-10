const { readdir, mkdir } = require('fs')
const { resolve, join } = require('path')
const { promisify } = require('util')
const Jimp = require('jimp')

const originDir = './src/assets/original'
const destinationDir = './src/assets/moving_head'

async function processFile (absolutePath, destinationPath) {
  const image = await Jimp.read(absolutePath)
  // image.crop(1375, 300, 2000, 2000)
  // .color([
  //   { apply: 'hue', params: [-12] },
  //   { apply: 'lighten', params: [6] }
  // ])
  image.contrast(0.2)
    .pixelate(35, function (err) {
      if (err) throw err
    }).resize(500, 500)
    .write(destinationPath)
}

async function main () {
  try {
    await promisify(mkdir)('./src/assets/cropped')
  } catch (err) {
    console.error('Cropped folder already exists')
  }
  const files = await promisify(readdir)(originDir)
  for (const file of files) {
    const absolutePath = resolve(originDir, file)
    const destinationPath = join(destinationDir, file.toLowerCase())
    console.log(`Processing ${absolutePath}`)
    await processFile(absolutePath, destinationPath)
    console.log(`DONE Processing ${absolutePath}`)
  }
}
main()
