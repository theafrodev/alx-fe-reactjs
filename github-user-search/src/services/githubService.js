const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `Bearer ${GITHUB_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub data");
  }

  const data = await response.json();
  return data;
};
