import { execSync } from 'child_process';

const branchName = execSync('git rev-parse --abbrev-ref HEAD')
  .toString()
  .trim();

// Regular expression for the branch naming convention (same as commitlint)
const branchRegex =
  /^(feat|fix|chore|docs|style|refactor|test|build|ci)\/[a-z0-9-]+$/;

if (!branchRegex.test(branchName)) {
  console.error(
    `Invalid branch name: ${branchName}. Branch name must match: <type>/<name> (e.g., feat/my-feature, fix/my-bug).`
  );
  process.exit(1);
}

console.log(`Branch name "${branchName}" is valid.`);
