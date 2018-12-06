import PyBreadcrumbItem from '../breadcrumb/src/breadcrumb-item.vue';

PyBreadcrumbItem.install = function(Vue) {
  Vue.component(PyBreadcrumbItem.name, PyBreadcrumbItem);
};

export default PyBreadcrumbItem;
