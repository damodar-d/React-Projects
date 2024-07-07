import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, //undefined -> We're doing nothing
    projects: [],
    tasks:[]
  });

  function handleAddTask(taskText){
    setProjectState((previousState) => {
      const taskId = Math.random()
      const newTaskObj = {
        text:taskText,
        projectId:previousState.selectedProjectId,
        id: taskId,
      };

      return {
        ...previousState,
        tasks: [...previousState.tasks, newTaskObj],
      };
    });
  }

  function handleDeleteTask(id){
    setProjectState((previousState) => {
      return {
        ...previousState,
        tasks: previousState.tasks.filter(task=>task.id!==id) //null -> We're adding a new project.
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: null, //null -> We're adding a new project.
      };
    });
  }

  function handleAddProject(newProject) {
    const newProjectId = Math.random()
    setProjectState((previousState) => {
      const newProjectObj = {
        ...newProject,
        id: newProjectId,
      };

      return {
        ...previousState,
        selectedProjectId:undefined,
        projects: [...previousState.projects, newProjectObj],
      };
    });
  }

  function handleDeleteProject(){
    setProjectState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: undefined,
        projects: previousState.projects.filter(project=>project.id!==previousState.selectedProjectId) //null -> We're adding a new project.
      };
    });

  }

  function handleCancelAddNewProject() {
    setProjectState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: undefined, //null -> We're adding a new project.
      };
    });
  }

  function handleSelectProject(id){
    setProjectState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: id, //null -> We're adding a new project.
      };
    });
  }

  console.log(projectState);

  const selectedProject = projectState.projects.find(project => (project.id === projectState.selectedProjectId))

  let content = <SelectedProject 
  onAddTask={handleAddTask}
  onDeleteTask={handleDeleteTask}
  onDeleteproject={handleDeleteProject} 
  tasks={projectState.tasks}
  project={selectedProject}/>;
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancelAddNewProject={handleCancelAddNewProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar 
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
        onStartAddProject={handleStartAddProject} 
        projects ={projectState.projects}/>
        {content}
      </main>
    </>
  );
}

export default App;
