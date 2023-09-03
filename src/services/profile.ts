const API_URL = "https://api.github.com/users";

export const getProfile = async (profile: string) => {
  const response = await fetch(`${API_URL}/${profile}`);
  const data = await response.json();
  return data;
};
