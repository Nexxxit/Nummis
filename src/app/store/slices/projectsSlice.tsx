import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface Project {
    id: string;
    projectName: string;
    date: string;
    expenses: number;
    revenue: number;
}

interface ProjectsState {
    projects: Project[];
}

const initialState: ProjectsState = {
    projects: []
}

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, action: PayloadAction<Project>) => {
            const newProject = action.payload;
            state.projects.push(newProject);
        },
        removeProject: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.projects = state.projects.filter((project) => project.id !== id);
        }
    }
})

export const {addProject, removeProject} = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;