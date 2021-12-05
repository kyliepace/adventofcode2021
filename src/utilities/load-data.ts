import fs from 'fs'

export function loadAndSplit(filename): string[]{
  const datastring = load(filename)
  return split(datastring)
}

function load(filename): string{
  return fs.readFileSync(filename, 'utf8')
}

function split(inputString: string): string[]{
  return inputString.split('\n')
}