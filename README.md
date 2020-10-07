# Chess

ClojureScript client-side chess ai for learning

## Features

- Parallel optimal move search using ClojureScript-bootstrapped web workers
  (meaning the workers compile and execute ClojureScript code that you send them)

- Components made using a [react-like html library](https://github.com/kkrausse/html-cljs)
  that includes an analog of [hooks](https://reactjs.org/docs/hooks-intro.html)
  to handle state management and dom lifecycle events.

### Development

    yarn add shadow-cljs
    yarn shadow-cljs help
    yarn shadow-cljs watch app bootstrap


### Deployment

    yarn shadow-cljs compile app bootstrap
    # then comment out the /js/ line in the .gitignore
    git add public && git commit -m "public subtree commit"
    git subtree push --prefix public origin gh-pages


## TODO:

  - loading indicator

  - something to say if you won or lost

