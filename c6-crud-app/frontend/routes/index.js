import TaskListing from '../src/pages/TaskListing.jsx'
import AddTask from '../src/pages/AddTask.jsx'

export const routes = [
    {
        path: '/',
        element: <TaskListing />
    },
    {
        path: '/add',
        element: <AddTask />
    },
    {
        path: '/edit/:id',
        element: <AddTask />
    }
]