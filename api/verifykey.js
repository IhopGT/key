// api/verifyKey.js

import { generatedKeys } from './generateKey';

export default function handler(req, res) {
  const { key } = req.query;

  if (generatedKeys.has(key)) {
    generatedKeys.delete(key);
    res.status(200).json({ valid: true });
  } else {
    res.status(200).json({ valid: false });
  }
}
