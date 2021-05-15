# components

1. **Yarn workspaces**:
      [link](https://classic.yarnpkg.com/en/docs/workspaces/) 
      - Yarn workspaces provide a way to organise thge packages in such a way that we only need to run `yarn install` once to install all of them in a single pass.
      - This is an alternative to `yarn link`. All the dependencies can be linked together using this. And workspaces can depend on one another with Continuously  being up to date.
      - Yarn  will use single lock file rather than per project.

2. **--use-workspaces**:
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
3. **Lerna publish**:
      ```
      Lerna publish # publishes the packges that have changed since last release

      Lerna publish from-git # explicitly publish the packages tagged in the current commit

      Lerna publish from-package # explicitly publish packages where the latest version is not present in the registry 

      ```
      ***lerna publish --dist-tag next***: When run with this flag, lerna publish will publish to npm with the given npm dist-tag (defaults to latest).

      This option can be used to publish a **prerelease** or **beta** version under a non-latest dist-tag, helping consumers avoid automatically upgrading to prerelease-quality code.

4. **Lerna version**:
      > Bump version of packages changed since the last release
      
      ```
      lerna version 1.0.1 # explicit
      lerna version patch # semver keyword
      lerna version       # select from prompt(s)
      ```
      When run, this command does the following:
      - Identifies packages that have been updated since the previous tagged release.
      - Prompts for a new version.
      - Modifies package metadata to reflect new release, running appropriate lifecycle scripts in root and per-package.
      - Commits those changes and tags the commit.
      - Pushes to the git remote.

5. **Lerna bootstrap**:
      - Bootstraps all the packagesin lerna repo.
      - Installs all their dependencies.
      - Links cross-dependencies.

      When run, this command will:
      - npm install all external dependencies of each package.
      - Symlink together all Lerna packages that are dependencies of each other.
      - npm run prepublish in all bootstrapped packages (unless --ignore-prepublish is passed).
      - npm run prepare in all bootstrapped packages.

6. **Lerna exec**
      > Execute an arbitrary command in each package

      ```
      $ lerna exec -- <command> [..args] # runs the command in all packages
      $ lerna exec -- rm -rf ./node_modules
      $ lerna exec -- protractor conf.js
      ```

7. Babel preset env [link](https://babeljs.io/docs/en/babel-preset-env)


