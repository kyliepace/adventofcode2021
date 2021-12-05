
import * as daysofcode from './daysofcode'

async function runScript(){
  try{
    const [ day, textFile ] = process.argv.slice(2)

    console.log('running advent of code solution for day ', day)
    await daysofcode[day](textFile)
    process.exit()
  }
  catch(err){
    console.log('error: ', err)
    process.exit(1)
  }
}

runScript()