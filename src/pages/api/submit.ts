import mongoPromise from '@/lib/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST' && req.body != null) {
    const client = await mongoPromise;
    const db = client.db('ecosystem');
    const collection = db.collection('projects');
  }
};
