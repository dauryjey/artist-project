export const fetchData = async ({ url, token }) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return await response.json()
}
