// api/generateKey.js

const generatedKeys = new Set();

function generateKey() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
  let key = '';

  for (let i = 0; i < 16; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  generatedKeys.add(key);
  return key;
}

export default function handler(req, res) {
  const key = generateKey();
  res.status(200).json({ key });
}

export { generatedKeys };
