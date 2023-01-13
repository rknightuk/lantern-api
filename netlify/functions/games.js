export const handler = async (event) => {
  const GB_PATH = `http://www.giantbomb.com/api/search?api_key=${process.env.GIANTBOMBKEY}` +
  `&query=${event.queryStringParameters.search}&format=json`

  const response = await fetch(GB_PATH)

  const data = await response.json()

  return {
    statusCode: 200,
    body: JSON.stringify(data.results)
  }
}
