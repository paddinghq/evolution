const API_BASE_URL = 'https://evolution-stagin.onrender.com/api/v1/auth/signin';

export const signIn = async (username: any, password: any) => {
  const response = await fetch(`$https://evolution-stagin.onrender.com/api/v1/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return response.json();
};
