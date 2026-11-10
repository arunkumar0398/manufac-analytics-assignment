# Dependabot follow-up: form-data and shell-quote

## Goal
Resolve the two remaining package alerts covered by this follow-up PR while keeping the change limited to their existing Yarn resolutions.

## Scope
- Update the existing `form-data@^3.0.0` resolution in `yarn.lock` from 3.0.4 to 3.0.5.
- Update the existing shared `shell-quote` resolution (`^1.7.3` and `^1.8.1`) from 1.8.4 to 1.11.0.
- Preserve the current dependency ranges in `package.json`; neither package is a direct dependency.
- Do not add or change package manifests or unrelated dependencies.

## Repository file check
The repository has one dependency lockfile, `yarn.lock`. The root `package.json` does not directly declare `form-data` or `shell-quote`; tracked JSON files contain no declarations for either package. There is no `package-lock.json`, `npm-shrinkwrap.json`, or `pnpm-lock.yaml` to synchronize.

## Acceptance criteria
1. The lockfile resolves `form-data` to 3.0.5 and `shell-quote` to 1.11.0, using the registry tarball checksums and integrity values for those published releases.
2. The existing semver requestors remain unchanged, and all dependencies required by the updated resolutions remain satisfied by the lockfile.
3. `yarn install --frozen-lockfile`, `yarn build`, and the repository test command pass in the existing GitHub Actions workflow.
4. The PR diff contains only `yarn.lock` and this spec.
5. Review the repository's currently open Dependabot alerts for these two packages and any additional advisories affecting the selected versions. The PR must not introduce a vulnerable resolution. Alert closure is verified separately after GitHub evaluates the updated default branch; a green CI run alone is not proof of closure.

## Validation
The workflow at `.github/workflows/dependabot-validation.yml` is configured for pull requests to `main` when `yarn.lock` changes. It runs frozen Yarn install, build, and Jest with `--passWithNoTests` (the repository currently has no matching test files). Link the resulting workflow run and its outcome in the PR conversation.

## Out of scope
- Broad dependency refreshes, direct dependency range changes, application behavior changes, or fixing unrelated alerts.
- Claiming that the PR creates no Dependabot events. GitHub controls alert generation and evaluation; this change's acceptance condition is that the proposed lockfile contains only the patched versions and does not introduce an affected version.
