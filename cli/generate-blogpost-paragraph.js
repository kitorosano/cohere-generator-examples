import cohere from 'cohere-ai'
cohere.init('ImuylLjA14JT0x7M0N5wLOcffnFrAonm6dz5bQok') 

const response = await cohere.generate({
  model: 'command-xlarge-beta',
  prompt:
    "This program will generate an introductory paragraph to a blog post given a blog title, audience, and tone of voice\n--\nBlog Title: Best Activities in Toronto\nAudience: Millennials\nTone of Voice: Lighthearted\nFirst Paragraph: Looking for fun things to do in Toronto? When it comes to exploring Canada's largest city, there's an ever-evolving set of activities to choose from. Whether you're looking to visit a local museum or sample the city's varied cuisine, there is plenty to fill any itinerary. In this blog post, I'll share some of my favourite recommendations\n--\nBlog Title: Mastering Dynamic Programming\nAudience: Developers\nTone of Voice: Informative\nFirst Paragraph: In this piece, we'll help you understand the fundamentals of dynamic programming, and when to apply this optimization technique. We'll break down bottom-up and top-down approaches to solve dynamic programming problems.\n--\nBlog Title: How to get started in Web Development\nAudience: Students\nTone of Voice: Enthusiastic\nFirst Paragraph: ",
  max_tokens: 100,
  temperature: 0.8,
  k: 0,
  stop_sequences: ['--'],
  return_likelihoods: 'NONE'
})
console.log(`Prediction: ${response.body.generations[0].text}`)
