// const form = document.getElementById('project-input')! as HTMLTemplateElement;
// const formClone = form.content.cloneNode(true)
// const app = document.getElementById('app')!;
// // form.prepend(app)
// app.appendChild(formClone)

import { ProjectInput } from './components/projectInput';
import { ProjectList } from './components/projectList';

// const projectList = document.getElementById('project-list')! as HTMLTemplateElement;
// const projectListClone = projectList.content.cloneNode(true);
// app.appendChild(projectListClone);
// const title = document.body.querySelector('h2')!;
// title.innerHTML = 'Title goes here'


new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
