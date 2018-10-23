##### Demo
<Container>
  <sk-text msg="I can work"></sk-text>
</Container>

``` vue
<template>
  <sk-text msg="I can work"></sk-text>
</template>
<script>
  export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
</script>
```

##### Attributes

| Attribute        | Description           | Type  | Accepted values |  Default |
| ---------------- |:---------------------:| -----:|----------------:|---------:|
| msg              | message display       | String |        -       |   test   |
