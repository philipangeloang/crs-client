# PLM CRS Client Workflow

This will be the official repository for all front-end related developments for PLM CRS 2023.

The technologies/frameworks that will be used mainly are as follows:

- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn](https://ui.shadcn.com/)
- [Laravel](https://laravel.com/)
- [MariaDB](https://mariadb.org/)

## Collaboration Guide

Considering you were already added as a collaborator do this one time step to clone the project.
`git clone https://github.com/philipangeloang/crs-client.git`

### Common Git Commands

- `git checkout -b [branch_name]` creation of a new branch and auto navigate
- `git checkout [branch_name]` navigating to different branches
- `git branch -a` displaying of all available branches
- `git push origin [branch_name]` pushing your changes to remote repository for review
- `git pull origin main` pulling all the changes from main branch for local to stay up-to-date
- `git add .` staging all the modified file
- `git commit -m "[commit_message]"` commiting the file for changes

### Collaboration Workflow

**THE MAIN BRANCH SHOULD ALWAYS BE DEPLOYABLE**
To keep main branch deployable, we will work in separate branches for new features/modules and merge them into main when they're completed

- Create a branch that represent the module/feauture that will be developed
  - If you will be developing the login page create a branch named `module/login`
  - If you will just be adding a feature to an existing module create a branch named `feature/authentication`
- Develop a module/feature that will not result to overlapping code
  - Module/feature assignment will be independent from each other
- After module/feature development is done, pushing it to the remote repository for review
  - `git push origin [branch_name]`
  - Open a pull request in github remote repository for review. Add comments for better understanding
  - The maintainer will merge it if code passed reviewed
- Make it a habit to always `git pull origin main` every start of the day to ensure your local repository is always up to date
