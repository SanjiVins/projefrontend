<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5 card mt-5 shadow">
        <div class="card-body">

          <h1>Aramak istediğiniz ürünü giriniz.</h1>
          <input v-model="name" type="text">
          <button @click="getAllByName" class="btn btn-primary">Ara</button>

          <table class="table">
            <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">UnitPrice</th>
              <th scope="col">UnitsInStock</th>
              <th scope="col">InterrogationTime</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products">
              <th scope="row">{{product.id}}</th>
              <td>{{product.name}}</td>
              <td>{{product.unitPrice}}</td>
              <td>{{product.unitsInStock}}</td>
              <td>{{product.interrogationTime}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProductGetAll",

  data(){
    return {
      product : {
        id : null,
        name : null,
        unitPrice : null,
        unitsInStock : null,
        interrogationTime : null,
      },

      products : [],

      name :null,

      url : "https://localhost:7028/api/Products/getall"
    }
  },

  methods : {
      getAll(){
        this.products = [];
        this.$http.get(this.url).then( (response) => {
          console.log(response.body)
          this.products = response.body;
        })
      },

      getAllByName(){
        this.products = [];
        if(this.name == ""){
          this.getAll();
        }
        else{
          this.$http.get("https://localhost:7028/api/Products/getbyname?name="+this.name).then( (response) => {
            this.products = response.body;
          })
        }


      }
  },

  mounted() {
    this.getAll();
  },

}
</script>

<style scoped>

</style>
