import PyBreadcrumb from './src/breadcrumb.vue';
import PyBreadcrumbItem from './src/breadcrumb-item.vue';

PyBreadcrumb.item = PyBreadcrumbItem;
PyBreadcrumb.install = function(Vue) {
  Vue.component(PyBreadcrumb.name, PyBreadcrumb);
};

export default PyBreadcrumb;
