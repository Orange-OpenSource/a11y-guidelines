# How to contribute to this project

This is mainly a guide for internal contribution from the team, if you are an external contributor you can follow this and skip parts that might not be relevant to you.


## TL;DR

The `master` branch is used to build the production website, thus you cannot directly push to it.
You have to create a branch, create a pull request from your branch to the `master` branch (which will give you access to a preproduction build provided by Netlify) then assign a reviewer and merge it once it's approved.

Every change (commit, merged pull request) to the `master` branch will trigger a production build of the website which is hosted on GitHub Pages.


## Workflow

This project is based on a kind of [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) workflow.
It means you cannot commit directly to the `master` branch and have to create a specific branch to apply a modification. Once you are ready you can open a pull request in order to merge your work branch on the `master` branch.
When you open a pull request, you have to set reviewer(s) who will be in charge of approving or rejecting your changes. The approbation of at least one reviewer is mandatory to merge the pull request.


## Naming things

Please make sure you are naming correctly your branch, so it's easy to find and understand what is it for.

A branch named `patch`, `correction`, `new-post` or `potato` is not relevant while a branch named `fix-typo-in-pdf-recommendations` or `update-the-autocomplete-component-article` is much more understandable.

The same goes for the commits. Please avoid naming them as `fix article`, `update` or anything not relevant. A commit history must be readable and easy to interpret by someone else or even yourself in a few months. We try to follow the [Conventional Commits](https://www.conventionalcommits.org) convention, please do so.


## Common pitfalls

- Make sure you are on the right branch before you commit anything (for the GitHub interface users, see the Create a new branch section below)


## Create a new branch

### Command Line

First, make sure that your are up to date with the last version of your target branch with `git fetch && git status`. If not, pull changes from it with `git pull`. After that, you can create your branch with:

```shell
$ git checkout -b my-new-branch
```


### Using the GitHub interface

1. Go to the [repository homepage](https://github.com/Orange-OpenSource/a11y-guidelines).
2. Open on the combobox displaying the current branch (probably `master`), it will display all the existing branches of the repository with an input used to filter them and create new ones. This is where you can select an existing branch to work on.
3. Type the name of your branch in the input field and then click on the `Create branch: xxx` (replace `xxx` with the name of the branch you are about to create).
4. You can now see that the combobox is showing your new branch instead of the `master` branch. This indicates that every modification you make on the repo is now done on your specific branch

![](https://user-images.githubusercontent.com/2474522/114052341-41b39c00-988e-11eb-9811-5a10ba46372d.png)


## Commit changes

### Command Line

```shell
$ git commit -m "fix(main navigation): current page was not announced by screen readers"
```

Don't forget to frequently push your commits to GitHub to avoid the risk of loosing your work. The first time you push, you will need to pass some arguments alongside the `git push` command:

```shell
$ git push --set-upstream origin my-new-branch
```


### Using the GitHub interface

If you use the GitHub interface to make a modification, you won't have any other choice than commit each file one at a time to save your modifications (this is where squashing commits becomes really valuable, see below).
When you edit a file in the GitHub interface, you will see a form under the editor providing you the commit feature. You have to:

1. Give your commit a name (remember the naming convention?).
2. Add a description if needed to add more context and explanations.
3. Choose an email address to sign the commit with (you probably won't need to worry about this and leave it untouched).
4. Choose between commit to the current branch (this is where you make sure that you are on the correct one) or create a new branch. If you already have created your branch you can directly commit your change to it.

![](https://user-images.githubusercontent.com/2474522/114052729-96571700-988e-11eb-8b87-37e0e00aa94f.png)


## Create a pull request

When you feel like it, you can create a pull request to merge your branch into the `master` branch (which triggers a deploy to production).
To do so, you have to navigate to the [pull requests page](https://github.com/Orange-OpenSource/a11y-guidelines/pulls), click on the `New pull request` button and select your branch in the `compare` combobox displayed and then create the pull request.

![](https://user-images.githubusercontent.com/2474522/114052825-ac64d780-988e-11eb-9b1a-7c7e3e7fcc4a.png)

When done, you will need to assign at least one reviewer to validate your modifications. The reviewer will have the abillity to approve or reject your pull request. Once you have at least one approval and not committed since the last approval, you are able to merge your pull request.

This is when Netlify provides a link to a version of the website onboarding the modifications included in your pull request. This is a good way to review changes without having to install the project and run it on your computer. The Netlify Bot will leave a comment in the pull request's conversation section when the preview is available (allow a few minutes) and rebuild the preview each time a new commit is pushed.


## Review a pull request

You can approve or reject a pull request by going to the `Files changed` tab on a pull request page. Then click on the `Review changes` button and it will open a panel in which you can leave a comment and select if it's just a comment or associate it with an approval or a change request.

![](https://user-images.githubusercontent.com/2474522/114052914-c30b2e80-988e-11eb-9654-f81df1abbcc0.png)


In this page, you can also directly add comments on the content changes too.


## Merge a pull request

Once your pull request is approved by at least one person, you are able to merge it. There a two options: `Rebase and merge` and `Squash and merge`.
To simplify, `rebase` will take all your commits and put them at the end of the `master`'s branch history while `squash` will merge them into just one commit and give you the ability to rewrite its name and description before putting it at the end of the `master`'s branch history.

Most of the time, you will want to `squash` your commits into one and rewrite its name to have a cleaner Git history.

When the pull request is merged, GitHub will automatically deploy a new version of the website on production. You can now delete your branch using the `Delete branch` button that appeared. If you are working on your computer, don't forget to remove your branch locally too with `git branch -d my-new-branch` and update your `master` branch.
