<template>
      <nav>
        <ul>
          <li v-for="rota in rotas">
            <RouterLink :to="rota.path ? rota.path : '/'">
                {{rota.titulo}}
            </RouterLink>
          </li>
        </ul>
      </nav>
    
  </template>

<script>

    export default{
        props: 
        {
            rotas:{
                type: Array,
                required: true
            }
        },
    }


</script>


<style>

</style>

