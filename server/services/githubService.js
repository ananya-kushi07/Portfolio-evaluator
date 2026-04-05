import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, 
});

export const getGitHubProfile = async (username) => {
  try {
    
    const { data: user } = await octokit.users.getByUsername({
      username,
    });

    // 2. Get repositories
    const { data: repos } = await octokit.repos.listForUser({
      username,
      per_page: 100,
    });

    return {
      user,
      repos,
    };
  } catch (error) {
    throw new Error("GitHub user not found");
  }
};