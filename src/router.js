import { createRouter, createWebHistory } from 'vue-router';
import AddStudent from './components/Add_Student.vue';
import ViewStudents from './components/View_Students.vue';
import AddRequest from './components/Add_Request.vue';
import ViewRequests from './components/View_Requests.vue';
import Login from './components/Login.vue';

const routes = [
  {
    path: '/admin/add-student',
    component: AddStudent,
    meta: { requiresAuth: true, roles: ['SPIRITDIRECTOR'] },
  },
  {
    path: '/admin/view-students',
    component: ViewStudents,
    meta: { requiresAuth: true },
  },
  {
    path: '/admin/add-request',
    component: AddRequest,
    meta: { requiresAuth: true, roles: ['SPIRITDIRECTOR'] },
  },
  {
    path: '/admin/view-requests',
    component: ViewRequests,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
