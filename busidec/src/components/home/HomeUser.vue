<template>
  <div>
      <h2>Bienvenue {{user.first_name}}</h2>
  </div>
</template>

<<script>
export default {
    name: 'home-user',
  props:[
      'user'
  ]
}
</script>
