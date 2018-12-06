<template>
  <div class="page">
    <h2>基础用法</h2>
    <section>
      <py-breadcrumb>
        <py-breadcrumb-item to="/">Home</py-breadcrumb-item>
        <py-breadcrumb-item to="/components/breadcrumb">Components</py-breadcrumb-item>
        <py-breadcrumb-item>Breadcrumb</py-breadcrumb-item>
      </py-breadcrumb>
    </section>
    <h2>带图标的</h2>
    <section>
      <py-breadcrumb>
        <py-breadcrumb-item to="/"> <py-icon type="close"></py-icon> Home </py-breadcrumb-item>
        <py-breadcrumb-item to="/components/breadcrumb">
          <py-icon type="close"></py-icon> Components
        </py-breadcrumb-item>
        <py-breadcrumb-item> <py-icon type="close"></py-icon> Breadcrumb </py-breadcrumb-item>
      </py-breadcrumb>
    </section>
    <h2>分隔符</h2>
    <section>
      <template>
        <py-breadcrumb separator=">">
          <py-breadcrumb-item to="/">Home</py-breadcrumb-item>
          <py-breadcrumb-item to="/components/breadcrumb">Components</py-breadcrumb-item>
          <py-breadcrumb-item>Breadcrumb</py-breadcrumb-item>
        </py-breadcrumb>
        <py-breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
          <py-breadcrumb-item to="/">Home</py-breadcrumb-item>
          <py-breadcrumb-item to="/components/breadcrumb">Components</py-breadcrumb-item>
          <py-breadcrumb-item>Breadcrumb</py-breadcrumb-item>
        </py-breadcrumb>
      </template>
    </section>
  </div>
</template>

<script>
import PyBreadcrumb from '@/components/breadcrumb';
import PyBreadcrumbItem from '@/components/breadcrumb-item';

export default {
  components: {
    'py-breadcrumb': PyBreadcrumb,
    'py-breadcrumb-item': PyBreadcrumbItem,
  },
};
</script>

<style lang="scss" scoped>
.demo-breadcrumb-separator {
  color: #ff5500;
  padding: 0 5px;
}
</style>
