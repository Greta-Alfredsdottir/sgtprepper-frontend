

export const request = async (url, method ='GET', body) => {
    if(!url) throw new Error('missing url')

        const options = {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            }
    }
  try {
    const response = await fetch (url, options)
    const result = await response.json()
    return result
  } catch (error) {
     console.error(error)
    
  }
        
}