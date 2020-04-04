import { NextApiHandler } from 'next';

const RandomQuoteAPI: NextApiHandler = (request, result) => {
  result.status(200).json({
    quote: 'Write tests, not too many, mostly integration',
    author: 'Guillermo Rauch',
  });
};

export default RandomQuoteAPI;
