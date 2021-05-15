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

7. **Babel preset env** [link](https://babeljs.io/docs/en/babel-preset-env)

8. **Jest**
      - *testEnvironment: 'node'*: is used to mock the dom
      - *jsdom*: is also an option but the tests become slow. If used, add the following lines at the beginning of the test
  
            /**
             * @jest-environment jsdom
             */
      - *moduleNameMapper*: is used to mappping the module for stubbing. They use regular expression to map to module names that allow to stub out the resources. 

            {
                  "moduleNameMapper": {
                  "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
                  "^[./a-zA-Z0-9$_-]+\\.png$": "<rootDir>/RelativeImageStub.js",
                  "module_name_(.*)": "<rootDir>/substituted_module_$1.js", // you can substitute captured regex groups using numbered backreferences
                  "assets/(.*)": [
                        "<rootDir>/images/$1", // numbered backreferences
                        "<rootDir>/photos/$1", // numbered backreferences
                        "<rootDir>/recipes/$1" // numbered backreferences
                        ]
                  }
            }
      - *identity-obj-proxy*: used to mock css modules for jest. Then all your className lookups on the styles object will be returned as-is (e.g., styles.foobar === 'foobar'). This is pretty handy for React Snapshot Testing.
            > yarn add --dev identity-obj-proxy




