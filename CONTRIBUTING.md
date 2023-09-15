# Contributing

The ide behind this repository is to create a text editor that is easy to use and easy to customize. If you have any ideas on how to improve this project, please feel free to [open an issue](https://github.com/k2con/masamo-text-editor/issues) in order to discuss it. You can also contact me us by [email](mailto:rincorpesgmail.com), or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

## Questions/Help

Do you need help?

An example will get you help faster than anything else you do. Create an example and [submit it as an issue](https://github.com/k2con/masamo-text-editor/issues) with the label `question` and We'll be happy to help you. :-)

## Reporting Bugs/Requesting Features

If you find bugs or want new features, please submit a [new issue]((https://github.com/k2con/masamo-text-editor/issues) with a clear description with the label `bug` for bugs; `invalid`, if you think it could be better in other way; or `enhancement` to request new features.

## Pull Request Process

Follow the steps below to make a contribution to this tool:

### 1) Discuss the change

[Open an issue](https://github.com/k2con/masamo-text-editor/issues) to discuss the change you want to make. Even if you think it is a small change, it is always good to discuss it before making it. This will help you to know if the change is worth it and if it is not already being worked on by someone else.

### 2) Develop the change

1. Fork this repository
2. Clone the forked project
```bash
$ git clone git clone git@github.com:k2con/masamo-text-editor.git
```
3. (This application uses Git flow collaboration model- Details can be at [Collaboration model](CONTRIBUTING.md#collaboration-model)) Start a new feature branch
```bash
$ git flow feature start my-awesome-feature
```
4. Set it up
```bash
$ cd masamo-text-editor
$ npm install
$ npm run dev
```
5. Make your changes
6. Commit your changes
```bash
$ git commit -m "My awesome feature is ready"
```
7. Push your changes to your forked repository
```bash
$ git push origin feature/my-awesome-feature
```
8. Open a pull request in this repository and fill the template with the requested information.

### 3) Wait for the review

After you open a pull request, the owners of this repository will review your code and give you feedback. If everything is ok, your pull request will be merged and your changes will be part of this project.

**If you consider the following:**

- You have added some new feature with which you add value so that more people reuse this library,
- You have made the tool more versatile to be compatible with new updates,
- You have fixed an existing issue,
- Or you have simply improved the user interface or its documentation

**Then you can be sure that your contribution will be accepted.**

If have not contributed to this project but the tool has been useful to you, you can also contribute by sharing your opinion or experience in the [issues section](https://github.com/k2con/masamo-text-editor/issues)

## Collaboration model

**Git Flow** - Why and How to use: GitFlow is a collection of Git commands to define a strict branching model designed around the project release for Vincent Driessen's branching model.

Gitflow is really just an abstract idea of a Git workflow. This means it dictates what kind of branches to set up and how to merge them together. The git-flow toolset is an actual command line tool that has an installation process.Git-flow extension is a wrapper around Git.

Why should use git flow: GitFlow is a collection of Git commands to provide many repository operations with just single command. It was developed to manage the branching mechanism with a standardised approach when developing features, handling releases and managing hotfixes. Using multiple separate branches in Git will provide flexibility but gets complex. This is easy in gitflow. It makes developer speed up the process with familiar branch structure. Switching branches is easy. Keep repository & process clean and tidy. Installation: Setup You need a working git installation as prerequisite. Git flow works on macOS, Linux and Windows

### macOS

```bash
$ brew install git-flow-avh
```

### Macports

```bash
$ port install git-flow-avh
```

### Linux (Debian)

```bash
$ apt-get install git-flow
```

### Linux (Fedora)

```bash
$ yum install git-flow
```

### Linux (CentOS)

```bash
$ yum install epel-release
$ yum install git-flow
```

### Windows

```bash
$ git clone --recursive git://github.com/nvie/gitflow.git
$ cd gitflow
$ git submodule update --init --recursive
$ export PATH=$PATH:`pwd`/gitflow/bin
```

Getting started Git flow needs to be initialized in order to customize your project setup.

Initialize After installing git-flow you can use it in your project by executing git flow init.

```bash
$ git flow init
```

You'll have to answer a few questions regarding the naming conventions for your branches. It's recommended to use the default values.

```bash
$ git flow init
Initialized empty Git repository in ~/project/.git/
No branches exist yet. Base branches must be created now.
Branch name for production releases: [master]
Branch name for "next release" development: [develop]
How to name your supporting branch prefixes?
Feature branches? [feature/]
Bugfix branches? [bugfix/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
```

### Feature Branches

Feature branches are used to develop new features for the upcoming or a distant future release. The essence of a feature branch is that it exists as long as the feature is in development, but will eventually be merged back into develop (to definitely add the new feature to the upcoming release) or discarded (in case of a disappointing experiment).

Feature branches typically exist in developer repos only, not in origin.

Creating a feature branch

```bash
$ git flow feature start MYFEATURE
```

This action creates a new feature branch based on develop and switches to it.

Switching between feature branches

```bash
$ git flow feature checkout MYFEATURE
```

Finishing a feature branch

```bash
$ git flow feature finish MYFEATURE
```

This action performs the following:

- Merges MYFEATURE into develop
- Removes the feature branch
- Switches back to develop branch

### Release Branches

Release branches support preparation of a new production release. They allow for last-minute dotting of i’s and crossing t’s. Furthermore, they allow for minor bug fixes and preparing meta-data for a release (version number, build dates, etc.). By doing all of this work on a release branch, the develop branch is cleared to receive features for the next big release.

The key moment to branch off a new release branch from develop is when develop (almost) reflects the desired state of the new release. At least all features that are targeted for the release-to-be-built must be merged in to develop at this point in time. All features targeted at future releases may not—they must wait until after the release branch is branched off.

It is exactly at the start of a release branch that the upcoming release gets assigned a version number—not any earlier. Up until that moment, the develop branch reflected changes for the “next release”, but it is unclear whether that “next release” will eventually become 0.3 or 1.0, until the release branch is started. That decision is made on the start of the release branch and is carried out by the project’s rules on version number bumping.

Creating a release branch

```bash
$ git flow release start RELEASE [BASE]
```

This action creates a new release branch based on develop and switches to it. Optionally you can specify a [BASE] to start from.

Switching between release branches

```bash
$ git flow release checkout RELEASE
```

Finishing a release branch

```bash
$ git flow release finish RELEASE
```

This action performs the following:

- Merges RELEASE into master
- Tags the release with its name
- Back-merges RELEASE into develop
- Removes the release branch

### Hotfix Branches

Hotfix branches are very much like release branches in that they are also meant to prepare for a new production release, albeit unplanned. They arise from the necessity to act immediately upon an undesired state of a live production version. When a critical bug in a production version must be resolved immediately, a hotfix branch may be branched off from the corresponding tag on the master branch that marks the production version.

The essence is that work of team members (on the develop branch) can continue, while another person is preparing a quick production fix.

Creating the hotfix branch

```bash
$ git flow hotfix start VERSION [BASENAME]
```

This action creates a new hotfix branch based on master and switches to it. Optionally you can specify a [BASENAME] to start from.

Switching between hotfix branches

```bash
$ git flow hotfix checkout VERSION
```

Finishing a hotfix branch

```bash
$ git flow hotfix finish VERSION
```

This action performs the following:

- Merges VERSION into master
- Tags the release with its name
- Back-merges VERSION into develop
- Removes the hotfix branch

### Support Branches

Support branches are used to prepare a new production release version of the previous release while the current release is out already. This is necessary in case immediate bugfixes for the current release are necessary and there exist changes on develop that cannot be immediately released.

Creating the support branch

```bash
$ git flow support start VERSION [BASENAME]
```

This action creates a new support branch based on master and switches to it. Optionally you can specify a [BASENAME] to start from.

Switching between support branches

```bash
$ git flow support checkout VERSION
```

Finishing a support branch

```bash
$ git flow support finish VERSION
```

This action performs the following:

- Merges VERSION into master
- Tags the release with its name
- Back-merges VERSION into develop
- Removes the support branch

### Bugfix Branches

Bugfix branches are used to fix bugs from the production release. They are branched from the production tag of the master branch.

Creating the bugfix branch

```bash
$ git flow bugfix start VERSION [BASENAME]
```

This action creates a new bugfix branch based on master and switches to it. Optionally you can specify a [BASENAME] to start from.

Switching between bugfix branches

```bash
$ git flow bugfix checkout VERSION
```

Finishing a bugfix branch

```bash
$ git flow bugfix finish VERSION
```

This action performs the following:

- Merges VERSION into master
- Tags the release with its name
- Back-merges VERSION into develop
- Removes the bugfix branch

### Version Tagging

Version tags are created automatically by the finish commands of the release, hotfix and support branches. It is not recommended to create a version tag manually.

