# Common errors/issues

1. Executed command in 0 packages:
      - When `yarn build` shows this message. It could be due to missing package.json in the root of a particular package

2. Jest encountered an unexpected token
      ```
      Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/en/ecmascript-modules for how to enable it.
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.
      ```
      This can be fixed by adding below preset in `babel.config.js`

      ```
      [
                "@babel/preset-react",
                // {
                //     "pragma": "dom", // default pragma is React.createElement (only in classic runtime)
                //     "pragmaFrag": "DomFrag", // default is React.Fragment (only in classic runtime)
                //     "throwIfNamespace": false, // defaults to true
                //     "runtime": "classic" // defaults to classic
                //     // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
                // }
      ]
      ```
3. If the coverage always show 
      ```
            Statements   : Unknown% ( 0/0 )
            Branches     : Unknown% ( 0/0 )
            Functions    : Unknown% ( 0/0 )
            Lines        : Unknown% ( 0/0 )
      ```
      Then check the path of coverageCollectables like: `'packages/*/src/**/*.{js,jsx}'`

4. Script to clear jenkins old build
      ```
      def jobName = "copy_folder"
      def job = Jenkins.instance.getItem(jobName)
      job.getBuilds().each { it.delete() }
      job.nextBuildNumber = 1
      job.save()
      ```