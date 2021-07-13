const quote = document.querySelector(".quote-div")
const genreButton = document.querySelector(".genre-button")
const randomButton = document.querySelector(".random-button")

const removeQuote = () => {
  while (quote.lastChild) {
    quote.removeChild(quote.lastChild)
  }
}

const renderQuote = (quote) => {
  const quoteDiv = document.querySelector(".quote-div")
  const quoteText = document.createElement('p')
  quoteText.innerText = quote.quoteText
  quoteText.classList = "quote-text"
  quoteDiv.append(quoteText)
  const quoteAuthor = document.createElement('p')
  quoteAuthor.innerText = quote.quoteAuthor
  quoteAuthor.classList = "quote-author"
  quoteDiv.append(quoteAuthor)
  genreButton.id = quote.quoteGenre
  genreButton.textContent = `more on ${quote.quoteGenre}`
}

const loadRandom = async () => {
  removeQuote()
  try {
    const randomURL = "https://quote-garden.herokuapp.com/api/v3/quotes/random"
    const response = await axios.get(randomURL)
    const quoteData = response.data.data[0]
    renderQuote(quoteData)
    return response
  } catch (err) {
    console.error(err)
  }
}

const loadSimilar = async (genre) => {
  removeQuote()
  try {
    const similarURL = `https://quote-garden.herokuapp.com/api/v3/quotes/random?genre=${genre}`
    const response = await axios.get(similarURL)
    const quoteData = response.data.data[0]
    renderQuote(quoteData)
    return response
  } catch (err) {
    console.error(err)
  }
}

loadRandom()

genreButton.addEventListener("click", (e) => {
  loadSimilar(e.target.id)
})

randomButton.addEventListener("click", loadRandom)