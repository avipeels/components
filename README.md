# components

1. Yarn workspaces:
      [link](https://classic.yarnpkg.com/en/docs/workspaces/) 
      - Yarn workspaces provide a way to organise thge packages in such a way that we only need to run `yarn install` once to install all of them in a single pass.
      - This is an alternative to `yarn link`. All the dependencies can be linked together using this. And workspaces can depend on one another with Continuously  being up to date.
      - Yarn  will use single lock file rather than per project.

2. --use-workspaces:
      This  enables integration with Yarn workspaces.
      **in lerna.json :**
      ```
      {
            ...
            "npmClient": "yarn",
            "useWorkspaces": true
      }
      ```

      **in root package.json**
      ```
      {
            "devDependencies": {
                  "lerna": "^2.2.0"
            },
            "workspaces": ["packages/*"]
      }
      ```
3. Lerna publish:
```
Lerna publish # publishes the packges that have changed since last release

Lerna publish from-git # explicitly publish the packages tagged in the current commit

Lerna publish from-package # explicitly publish packages where the latest version is not present in the registry 

```
*lerna publish --dist-tag next*: When run with this flag, lerna publish will publish to npm with the given npm dist-tag (defaults to latest).

This option can be used to publish a **prerelease** or **beta** version under a non-latest dist-tag, helping consumers avoid automatically upgrading to prerelease-quality code.

