const core = require('@actions/core'); // To interact with GitHub Actions
const github = require('@actions/github'); // To get PR details

try {
  // Get the PR title from the input
  const prTitle = github.context.payload.pull_request.title;

  // Define the conventional commit regex pattern
  const pattern =
    /^(feat|fix|chore|docs|style|refactor|test|build|ci|perf|release)(\([a-z\-]+\))?: .+/;

  // Check if the PR title matches the pattern
  if (!prTitle.match(pattern)) {
    core.setFailed(
      `Invalid PR title: ${prTitle}. It should follow the Conventional Commits format.`
    );
  } else {
    core.info(`Valid PR title: ${prTitle}`);
  }
} catch (error) {
  core.setFailed(error.message);
}
