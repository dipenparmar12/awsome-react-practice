## React/Tailwind/Css

Start wth new project or concept. 

### Bash script 
> `bash make_project.sh project_name` 

> `code ./project_name/project_name `

### Manual 

 - `git clone -b start git@github.com:dipenparmar12/awsome-react-practice.git`: Clone *start* 
 - OR `git checkout start`
 - `git checkout -b new_project_branch`:
 - Copy `start` directory -> `project_name`
 - `git add .` && `git commit -m "Sub-Project init"` && `git push origin new_project_branch`
 - `git checkout main` && `git merge new_project_branch`


### GIT
## Add sub-module 
> `git submodule add GIT_URL [FOLDER_NAME/GIT_REPO_NAME]` 

> `git submodule add git@github.com:dipenparmar12/javascript_utils.git example_repos/javascript_utils` 

add submodule with specific branch 
> `git submodule add -b branch_name repository_url path/to/submodule`
> `git submodule add -b test_branch git@github.com:dipenparmar12/javascript_utils.git javascript_utils`

## Remove submodule
> `git submodule deinit -f [FOLDER_NAME/GIT_REPO_NAME]`
> `git rm -f [FOLDER_NAME/GIT_REPO_NAME]`

> `git submodule deinit -f example_repo`
> `git rm -f example_repo`


```
       __
  w  c(..)o   (
   \__(-)    __)
       /\   (
      /(_)___)
      w /|
       | \ 
      m  m
```
