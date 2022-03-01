// const form = document.getElementById('project-input')! as HTMLTemplateElement;
// const formClone = form.content.cloneNode(true)
// const app = document.getElementById('app')!;
// // form.prepend(app)
// app.appendChild(formClone)

// const projectList = document.getElementById('project-list')! as HTMLTemplateElement;
// const projectListClone = projectList.content.cloneNode(true);
// app.appendChild(projectListClone);
// const title = document.body.querySelector('h2')!;
// title.innerHTML = 'Title goes here'

/// <reference path='./models/dragDrop.ts'/>
/// <reference path='./models/project.ts'/>
/// <reference path='./state/projectState.ts'/>
/// <reference path='./util/validation.ts'/>
/// <reference path='./decorators/autobind.ts'/>
/// <reference path='./components/projectInput.ts'/>
/// <reference path='./components/projectList.ts'/>

namespace App {
 
  

  

  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');
}
