import { type NextRequest } from 'next/server'
import { jsonResponse } from '@lib/utils'
import querystring from 'querystring'

const REQUEST_LIMIT = 10000;

export const config = {
  runtime: 'edge'
}

export default async function requests(req: NextRequest) {
  try{
    if (req.method === 'POST') {
      return jsonResponse(405, { error: { message: 'Method not allowed' } })
    }

    const query = querystring.parse(req.url.split('?')[1])
    const startDate = query.startDate
    const endDate = query.endDate

    if(!!startDate === false || !!endDate === false){
      return jsonResponse(400, { error: { message: 'Missing required query parameter. startDate and endDate expected.' } })
    }

    const url = `${process.env.SOCRATA_API_URL}?$where=` + 
                encodeURI(`createddate between '${startDate}' and '${endDate}'`) +
                `&$limit=${REQUEST_LIMIT}`
 
    const headers = new Headers({
      'X-App-Token': process.env.SOCRATA_TOKEN || ''
    })

    const response = await fetch(url, { headers })
    const data = await response.json()

    return jsonResponse(200, { success: true, data })
  }
  catch(e){
    console.error('/api/request: Error occurred:', e)
    return jsonResponse(500, { error: { message: 'An unexpected error occurred.' } })
  }
}