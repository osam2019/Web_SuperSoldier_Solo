import Home from './components/Home.vue';

import SubjectsWrapper from './components/SubjectsWrapper.vue';
import Subject from './components/Subject.vue';

import CardsWrapper from './components/CardsWrapper.vue';
import Card from './components/Card.vue';

import TestsWrapper from './components/TestsWrapper.vue';
import Test from './components/Test.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/subjects', component: SubjectsWrapper },
    { path: '/subjects/:id', component: Subject },
	{ path: '/cards', component: CardsWrapper },
    { path: '/cards/:id', component: Card },
	{ path: '/tests', component: TestsWrapper },
    { path: '/tests/:id', component: Test },

	
];

export default routes;
