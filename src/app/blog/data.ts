export const posts = [
  {
    id: "git-commit-conventions",
    title: "Git Commit Conventions",
    description: "The commit conventions are very useful when trying to explain to a group of developers about your changes.",
    date: "4/24/2022",
    tags: ["git"],
    content: `Hi There!

The commit conventions are very useful when trying to explain to a group of developers (maybe colleagues) about your changes. In the Code Review the implicit explanation of your changes is a powerful tool for their understanding and probably an advantage because you can complement your changes with your explanation, so that means you need less time to explain and improve the understanding of the case for your colleagues.

A few examples of commits using conventions are as follows

1. As a developer, I add all the files for the home page
\`\`\`text
feat(web): Add home page
\`\`\`

2. As a developer, I fix a problem in middleware validation
\`\`\`text
fix(middleware): Add validation when user is null
\`\`\`

So, how can I know the "format" to do commits with conventions? First of all, the following links are a "guide" to check but don't forget "conventions are conventions, not a rule"

Links:
* [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
* [Git commit msg](http://karma-runner.github.io/1.0/dev/git-commit-msg.html)

Now, I leave you a table with the conventions that I usually use

| format   | Name                    | Description                                                    | Examples                                                     |
|----------|-------------------------|----------------------------------------------------------------|--------------------------------------------------------------|
| feat     | Features                | Introduces a new feature to the codebase                       | A new view, new service, new function or process             |
| fix      | Bug Fixes               | patches a bug in your codebase                                 | Validation if not null in a condition with that problem      |
| build    | Builds                  | Changes that affect the build system or external dependencies  | Update a dependency or changes in the build project scripts  |
| docs     | Documentation           | Documentation only changes                                     | Add the documentation for run the project or test            |
| chore    | Chores                  | Other changes that don't modify src or test files              | Changes IDE or editor code configs                           |
| style    | Styles                  | Changes that do not affect the meaning of the code             | White-space, formatting, missing semi-colons, etc            |
| refactor | Code Refactoring        | A code change that neither fixes a bug nor adds a feature      | Rename filename, change variable names, etc                  |
| test     | Tests                   | Adding missing tests or correcting existing tests              | Add or modify unit test, e2e test, integration test, etc.    |
| ci       | Continuous Integrations | Changes in CI configuration files and scripts                  | Add or modify script for deploy, build, security, lint, etc. |

That's all, thanks for reading!`
  },
  {
    id: "install-oh-my-zsh-on-amazon-linux",
    title: "Install Oh-My-Zsh on Amazon Linux",
    description: "This is a short code snippet to install Oh-My-Zsh on Amazon Linux.",
    date: "4/23/2022",
    tags: ["zsh", "ec2", "amazon", "linux"],
    content: `Hi There!

This is a short code snippet to install Oh-My-Zsh on Amazon Linux.

TLDR

\`\`\`sh
sudo yum update -y
sudo yum install zsh git -y
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
\`\`\``
  },
  {
    id: "be-student-be-teacher",
    title: "Be Student, Be Teacher, Be Student",
    description: "Reflections on learning, teaching, and expanding the horizon of knowledge.",
    date: "4/16/2022",
    tags: ["reflexion"],
    content: `be student,  
be master,  
be student  
  
How should I start?  
  
You start to learn something new, challenge yourself, and seek mastery, then you realize that the horizon of knowledge expands, and you evaluate if you want to continue.

Choose a new path. You order goals and objectives, conclude your priorities and make a decision.

Do you feel sure of what you know? You teach, share and collaborate in expanding the horizon of knowledge.

Find something new, it catches your eye. You are a student again.

---

¿Cómo debería empezar?

Inicias aprendiendo algo nuevo, te desafías y buscas la maestría, luego te das cuenta de que se expande el horizonte de conocimiento, evalúas si quieres continuar.

Elegir un nuevo camino. Ordenas metas y objetivos, concluyes tus prioridades y tomas una decisión.

¿Te sientes seguro de lo que sabes? Enseñas, compartes y colaboras en la expansión del horizonte de conocimiento.

Encuentras algo nuevo, te llama la atención. Vuelves a ser estudiante.`
  }
];
