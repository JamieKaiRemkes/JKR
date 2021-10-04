# JKR
Welcome to my portfolio project, a software project for me to show my current skills and have a place to try new things. You can follow my progress as a developer and maybe you will find something usefull for one of your own projects!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project to a production environment.

### Prerequisites

Before we start let's make sure you have the correct software installed.

Install [Node js](https://nodejs.org/en/)

Check if node is installed.
```
node --version
```

#### Setup git aliases to make the workflow easier

##### Global
Run the following commands in the terminal to create shortcuts for common git commands:
```
git config --global alias.sw switch
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
```

##### Local
Run the following commands in the terminal to set a default commit template:
```
git config commit.status false
git config commit.template .github/COMMIT_MESSAGE_TEMPLATE.txt
```

***Make sure vs code is added to your PATH!*** Then run the following command to set vs code as the default git editor:
```
git config core.editor "code --wait"
```

Run the following commands in the terminal to make the feature branch flow easier:
```
git config alias.start '!f() { git checkout -b $1 develop && git push --set-upstream origin $1; }; f'
git config alias.save '!f() { git add -A && git commit && git push; }; f'
git config alias.flush '!f() { git checkout develop && git pull && git fetch -p && git branch -vv | grep ": gone]"| grep -v "(^\*|develop)" | awk '"'"'{ print $1 }'"'"' | xargs git br -D; }; f'
```

Check if it worked by running this command:
```
git config --get-regexp alias
```

To remove all git aliases run the following commands:
```
git config --remove-section alias
git config --global --remove-section alias
```

For more information about git aliases see the [documetation](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases).

### Installing

Follow the steps below to get the project installed and running on your machine.

Clone the repo

```
git clone https://github.com/JamieKaiRemkes/JKR.git JKR
```

Change folder
```
cd JKR
```

Install dependencies
```
npm i
```

Run the project
```
npm run dev
```

Go to [http://localhost:8080](http://localhost:8080) to see it running.

## Running the tests

We currently don't use any unit test framework, expected to change in the near future. We do however use linters to enforce code styling.

### Codestyling

We do implement a standardized code styling troughout our codebase. We use typescript linters and other tools for enforcing these code styles. Run the following command in root folder of the service you want to lint:

```
npm run lint
```

## Deployment

For deployment we use ci/cd pipelines. We use Github actions to run tests, builds and finally deploy. Look at the .github/workflows folder in this repository to see al the actions or look at the [Github actions documentation](https://help.github.com/en/actions) for more info.

## Built With

* [Node JS](https://nodejs.org/en/download/) - Runtime used

## Versioning

We don't distribute multiple versions. We use ci/cd pipelines to directly include any changes made to this software into production.

## Authors

* **Jamie Kai Remkes** - *Initial work* - [Github](https://github.com/JamieKaiRemkes)

See also the list of [contributors](https://github.com/JamieKaiRemkes/JKR/graphs/contributors) who participated in this project.

## License

This project is open source under the GNU general public License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to all who worked on this project.