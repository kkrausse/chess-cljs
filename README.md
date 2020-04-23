# Chess

TODO:

  - something to tell if you won or lost

client-side chess ai.

to run:

    yarn shadow-cljs help
    yarn shadow-cljs watch app bootstrap


## Deployment

    yarn shadow-cljs compile app bootstrap
    # then comment out the /js/ line in the .ginitgnore
    git add public && git commit -m "public subtree commit"
    git subtree push --prefix public origin gh-pages

