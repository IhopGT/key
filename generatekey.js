// api/generateKey.js

const generatedKeys = new Set(); // In-memory store for generated keys (temporary)

// Function to generate a 16-character key
function generateKey() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
  const keyLength = 16;
  let key = '';

  for (let i = 0; i < keyLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    key += characters[randomIndex];
  }

  return key;
}

export default function handler(req, res) {
  const key = generateKey();
  generatedKeys.add(key); // Store the generated key

  res.status(200).json({ key });
}

export { generatedKeys }; // Export the keys for verification
