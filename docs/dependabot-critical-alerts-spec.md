# Critical Dependabot alerts: focused remediation spec

## Purpose
Resolve the three Critical Dependabot alerts identified for this repository by updating only their vulnerable transitive dependency resolutions in `yarn.lock`.

## In-scope alerts and target resolutions
- `form-data`: resolve `form-data@^3.0.0` to 3.0.4. This release requires `es-set-tostringtag@^2.1.0`; the lockfile must resolve that package to 2.1.0.
- `shell-quote`: resolve the existing lock entry to 1.8.4.
- `websocket-driver`: resolve the existing lock entry to 0.7.5.

These are targeted lockfile resolutions. Do not widen dependency ranges or change unrelated packages as part of this remediation.

## Acceptance criteria
1. The lockfile contains the target versions, registry URLs, integrity values, and transitive requirement listed above.
2. `yarn install --frozen-lockfile` succeeds.
3. `yarn build` succeeds.
4. Jest runs in CI. The repository currently has no matching test files, so `--passWithNoTests` permits this empty suite; any discovered tests must still pass.
5. The CI workflow runs for this PR and reports success.
6. Reviewers confirm the patch is limited to the named alerts and the required `es-set-tostringtag` dependency update. Alert resolution is confirmed in Dependabot after the updated manifest/lockfile is evaluated.

## Out of scope
- Updating unrelated dependencies or performing a broad dependency refresh.
- Adding application behavior changes.
- Treating a green build as proof that GitHub has closed the Dependabot alerts; alert state must be checked separately.

## Evidence
- PR CI workflow: `.github/workflows/dependabot-validation.yml`.
- CI run and review evidence should be linked in the PR description when available.
