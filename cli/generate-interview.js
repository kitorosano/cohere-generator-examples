import cohere from 'cohere-ai'
import ora from 'ora'

cohere.init('ImuylLjA14JT0x7M0N5wLOcffnFrAonm6dz5bQok') 
const spinner = ora('Generating interview questions...').start()
const start = performance.now()
const interval = setInterval(() => {
  const time = Math.floor((performance.now() - start) / 1000)
  spinner.text = `Generating interview questions... ${time}s`
})

const response = await cohere.generate({
  model: 'command-xlarge-beta',
  prompt: 'Generate a list of 5 interview questions for a senior frontend engineer',
  max_tokens: 100,
  temperature: 1.2,
  k: 0,
  p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  stop_sequences: [],
  return_likelihoods: 'NONE',
})
const time = Math.floor((performance.now() - start) / 1000)
spinner.succeed(`Done in ${time}s!`)
clearInterval(interval)

const { generations } = response.body
console.log(generations[0].text)