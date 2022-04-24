---
title: "Git Commit Conventions"
linktitle: "Git Commit Conventions"
date: 2022-04-24T02:10:36-04:00
author:
  name: "Francisco Sánchez"
type:
- post
- posts
tags:
- git
series:
- git
---

Hi There!

The commits conventions are very useful when trying to explain to a group of developers (maybe colleagues) about your changes. In the Code Review the implicit explanation of your changes is a powerful tool for their understanding and probably an advantage because you can complement your changes with your explanation, so that means you need a less time to explain and improves the understanding of the case to his colleagues.

A few examples of commits using conventions are the follows

1. As a developer, I add all the files for the home page
```text
feat(web): Add home page
```

2. As a developer, I fix a problem in middleware validation
```text
fix(middleware): Add validation when user is null
```

So, how I can know the "format" to do commits with conventions? First of all, the following links are a "guide" to check but don't forget "conventions are conventions, not a rule"

Links:
* [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
* [Git commit msg](http://karma-runner.github.io/1.0/dev/git-commit-msg.html)

Now, I leave you a table with the conventions that I usually use

| format   | Name                    | Description                                                    | Examples                                                     |
|----------|-------------------------|----------------------------------------------------------------|--------------------------------------------------------------|
| feat     | Features                | Introduces a new feature to the codebase                       | A new view, new service, new function or process             |
| fix      | Bug Fixes               | patches a bug in your codebase                                 | Validation if not null in a condición with that problem      |
| build    | Builds                  | Changes that affect the build system or external dependencies  | Update a dependency or changes in the build project scripts  |
| docs     | Documentation           | Documentation only changes                                     | Add the documentation for run the project or test            |
| chore    | Chores                  | Other changes that don't modify src or test files              | Changes IDE or editor code configs                           |
| style    | Styles                  | Changes that do not affect the meaning of the code             | White-space, formatting, missing semi-colons, etc            |
| refactor | Code Refactoring        | A code change that neither fixes a bug nor adds a feature      | Rename filename, change variable names, etc                  |
| test     | Tests                   | Adding missing tests or correcting existing tests              | Add or modify unit test, e2e test, integration test, etc.    |
| ci       | Continuous Integrations | Changes in CI configuration files and scripts                  | Add or modify script for deploy, build, security, lint, etc. |

That's all, thanks for reading!
