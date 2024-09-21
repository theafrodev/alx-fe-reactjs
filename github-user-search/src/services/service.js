const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

export const fetchGitHubData = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${GITHUB_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub data");
  }

  const data = await response.json();
  return data;
};
