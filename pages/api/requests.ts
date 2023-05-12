import { NextApiRequest } from 'next'
import { jsonResponse } from '@lib/utils'
import axios from 'axios'

export const config = {
  runtime: 'edge',
}

// We make API requests on a per-day basis. On average, there are about 4k
// requests per day, so 10k is a large safety margin.
const REQUEST_LIMIT = 10000;

export default async function requests(req: NextApiRequest) {
  try{

    let startDate = req.query?.startDate || null;
    let endDate = req.query?.endDate || null;

    if(!!startDate === false || !!endDate === false){
      return jsonResponse(400, { error: { message: 'Missing required query parameter. startDate and endDate expected.' } })
    }

    const url = `${process.env.SOCRATA_API_URL}?$where=` + 
                encodeURI(`createddate between '${startDate}' and '${endDate}'`) +
                `&$limit=${REQUEST_LIMIT}&$app_token=${process.env.SOCRATA_TOKEN}`
 
    const data = await axios.get(url)
    
    console.log('/api/requests: returning ',{data})
 
    return jsonResponse(200, { success: true, data })
  }
  catch(e){
    console.error('/api/request: Error occurred:', e)
    return jsonResponse(500, { error: { message: 'An unexpected error occurred.' } })
  }
}