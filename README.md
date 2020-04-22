# Chess

client-side (right now) chess ai.

    yarn shadow-cljs help
    yarn shadow-cljs watch app

## Deployment

    yarn shadow-cljs release app
    # then comment out the /js/ line in the .ginitgnore
    git add public && git commit -m "Initial public subtree commit"
    git subtree push --prefix public origin gh-pages

