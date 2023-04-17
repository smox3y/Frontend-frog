import { createRouter, createWebHistory } from 'vue-router';
import AddStudent from './components/Add_Student.vue';
import ViewStudents from './components/View_Students.vue';
import AddRequest from './components/Add_Request.vue';
import ViewRequests from './components/View_Requests.vue';

const routes = [
    {
        path: '/',
        redirect: '/add-student',
    },
    {
        path: '/add-student',
        name: 'add-student',
        component: AddStudent,
    },
    {
        path: '/view-students',
        name: 'view-students',
        component: ViewStudents,
    },
    {
    path: '/add-request',
    name: 'add-request',
    component: AddRequest,
    },
    {
    path: '/view-requests',
    name: 'view-requests',
    component: ViewRequests,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
