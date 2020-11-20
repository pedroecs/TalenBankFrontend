<template>
  <div>
    <br />
    <div class="row wrapper border-bottom white-bg page-heading">
      <div class="col-lg-12">
        <h2>Lista de Vagas</h2>
      </div>
    </div>

    <form @submit.prevent="handleSubmit">
    <template id="bs-modal">
      <!-- MODAL -->
      <div
        class="modal fade"
        id="myModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" aria-label="Close" @click="closeModal()">
                <span aria-hidden="true">&times;</span>
              </button>
              
            </div>

            <!-- AQUI começa o modal  -->

            <div class="inmodal" tabindex="-1" role="dialog">
              <center>
                <br />
                <h4 class="modal-title">Cadastro de Vagas</h4>
                <br />
              </center>

              <div class="col-sm-12">
                <br />

                <div class="form-group col-sm-12" :class="{'form-group--error': $v.vacanciesForm.nameVacancies.$error}">
                  <label class="control-label col-sm-4">Vaga</label>
                  <div class="input-group col-sm-5">
                    <input
                      type="text"
                      placeholder
                      class="form-control"
                      v-model="vacanciesForm.nameVacancies"
                    />
                    <div class="error" v-if="submitted && !$v.vacanciesForm.nameVacancies.required" >Nome da Vaga é obrigatório</div>
                  </div>
                </div>

                <div class="form-group col-sm-12" :class="{'form-group--error': $v.vacanciesForm.stack.$error}">
                  <label class="control-label col-sm-4">Stack</label>
                  <div class="input-group col-sm-5">
                    <input
                      type="text"
                      placeholder
                      class="form-control"
                      v-model="vacanciesForm.stack"
                    />
                    <div class="error" v-if="submitted && !$v.vacanciesForm.stack.required" >Stack é obrigatório</div>
                  </div>
                </div>

               

                <div class="form-group col-sm-12" :class="{'form-group--error': $v.vacanciesForm.requirements.$error}">
                  <label class="control-label col-sm-4">Requisitos</label>
                  <div class="input-group col-sm-5">
                    <input
                      type="text"
                      placeholder
                      class="form-control"
                      v-model="vacanciesForm.requirements"
                    />
                    <div class="error" v-if="submitted && !$v.vacanciesForm.requirements.required" >Requisitos é obrigatório</div>
                  </div>
                </div>
             

                <div class="form-group col-sm-12" :class="{'form-group--error': $v.vacanciesForm.differentials.$error}">
                  <label class="control-label col-sm-4">Diferenciais</label>
                  <div class="input-group col-sm-5">
                    <input 
                        type="text" 
                        placeholder class="form-control"
                        v-model="vacanciesForm.differentials"
                    />
                    <div class="error" v-if="submitted && !$v.vacanciesForm.differentials.required" >Diferenciais é obrigatório</div>

                  </div>
                </div>
              </div>
              <!-- AQUI TEMRINAR -->
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-default" @click="closeModal()">Fechar</button>
              <button type="submit" class="btn btn-primary">Salvar</button>
            </div>
          </div>
        </div>
      </div>
    </template>
    </form>

    <form @submit.prevent="handleSubmitEdit">
    <template id="bs-modal">
      <!-- MODAL EDIT -->
      <div
        class="modal fade"
        id="myModalEdit"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" aria-label="Close" @click="closeModalEdit()">
                <span aria-hidden="true">&times;</span>
              </button>
              
            </div>

            <!-- AQUI começa o modal  -->

            <div class="inmodal" tabindex="-1" role="dialog">
              <center>
                <br />
                <h4 class="modal-title">Cadastro de Vagas</h4>
                <br />
              </center>

              <div class="col-sm-12">
                <br />

                <div class="form-group col-sm-12" :class="{'form-group--error': $v.vacanciesForm.nameVacancies.$error}">
                  <label class="control-label col-sm-4">Vaga</label>
                  <div class="input-group col-sm-5">
                    <input
                      type="text"
                      placeholder
                      class="form-control"
                      v-model="vacanciesForm.nameVacancies"
                    />
                    <div class="error" v-if="submitted && !$v.vacanciesForm.nameVacancies.required" >Nome da Vaga é obrigatório</div>
                  </div>
                </div>

                <div class="form-group col-sm-12" :class="{'form-group--error': $v.vacanciesForm.stack.$error}">
                  <label class="control-label col-sm-4">Stack</label>
                  <div class="input-group col-sm-5">
                    <input
                      type="text"
                      placeholder
                      class="form-control"
                      v-model="vacanciesForm.stack"
                    />
                    <div class="error" v-if="submitted && !$v.vacanciesForm.stack.required" >Stack é obrigatório</div>
                  </div>
                </div>

               

                <div class="form-group col-sm-12" :class="{'form-group--error': $v.vacanciesForm.requirements.$error}">
                  <label class="control-label col-sm-4">Requisitos</label>
                  <div class="input-group col-sm-5">
                    <input
                      type="text"
                      placeholder
                      class="form-control"
                      v-model="vacanciesForm.requirements"
                    />
                    <div class="error" v-if="submitted && !$v.vacanciesForm.requirements.required" >Requisitos é obrigatório</div>
                  </div>
                </div>
             

                <div class="form-group col-sm-12" :class="{'form-group--error': $v.vacanciesForm.differentials.$error}">
                  <label class="control-label col-sm-4">Diferenciais</label>
                  <div class="input-group col-sm-5">
                    <input 
                        type="text" 
                        placeholder class="form-control"
                        v-model="vacanciesForm.differentials"
                    />
                    <div class="error" v-if="submitted && !$v.vacanciesForm.differentials.required" >Diferenciais é obrigatório</div>

                  </div>
                </div>
              </div>
              <!-- AQUI TEMRINAR -->
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-default" @click="closeModalEdit()">Fechar</button>
              <button type="submit" class="btn btn-primary">Salvar</button>
            </div>
          </div>
        </div>
      </div>
    </template>
    </form>

    <template id="bs-modal">
      <!-- MODAL DELETE -->
      <div
        class="modal fade"
        id="myModalDelete"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" aria-label="Close" @click="closeModalDelete()">
                <span aria-hidden="true">&times;</span>
              </button>
             
            </div>

            <!-- AQUI começa o modal  -->

            <div class="inmodal" tabindex="-1" role="dialog">
              <center>
                <br />
                <h4 class="modal-title">Deseja realmente apagar essa Vaga ?</h4>
                <br />
                 
              </center>
           
              <div class="col-sm-12">
                <br />
            
                <br>
              </div>
              <!-- AQUI TEMRINAR -->
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-default" @click="closeModalDelete()">Fechar</button>
              <button type="button" class="btn btn-primary" @click="modalDelete(vacanciesForm.id,vacanciesForm)">Comfirmar</button>
            </div>
          </div>
        </div>
      </div>
    </template>
    


    <!-- <modal></modal> -->
    <div class="row wrapper border-bottom white-bg page-heading">
      <br />
      <div class="col-lg-12">
        <div class="pull-right">
          <button class="btn btn-primary" data-toggle="modal" data-target="#myModal" type="button">
            <i class="fa fa-plus"></i>
          </button>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th >ID</th>
              <th>Vaga</th>
              <th >Stack</th>
              <th >Requisitos</th>
              <th >Diferenciais</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in vacanciesList" :key="item.Id">
              <td >{{item.id}}</td>
              <td >{{item.nameVacancies}}</td>
              <td >{{item.stack}}</td>
              <td >{{item.requirements}}</td>
              <td >{{item.differentials}}</td>
              <td >
                  <button
                    @click="editForm(item)"
                    class="btn btn-default btn-circle"
                    type="button"
                  >
                    <i class="fa fa-edit"></i>
                  </button>
                </td>
                <td >
                  <button
                    @click="deleteForm(item)"
                    class="btn btn-default btn-circle"
                    type="button"
                  >
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
            </tr>
          </tbody>     
        </table>
        <center>
           <tfoot>
                <!-- <paginate 
                  :page-count="pagesTotal"
                  :page-range="3"
                  :margin-pages="2"
                  
                  :prev-text="'Anterior'"
                  :next-text="'Próximo'"
                  :container-class="'pagination'"
                  :page-class="'page-item'">
                </paginate> -->
              </tfoot>
          </center>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
// axios.defaults.baseURL = "http://localhost:5000/";
import { required, minLength, between } from "vuelidate/lib/validators";
import MaskedInput from "vue-text-mask";


export default {
  name: "Vacancies",
  data() {
    return {
     
      total: 0,
      page: 1,
      pagesTotal: 1,
      numberOfItemsPerPage: 10,
      departmentList: [],
      vacanciesList: [],
      vacanciesForm: {},
      token: "",
      submitted: false
    };
  },
  componets: {
    MaskedInput
  },
  validations: {
    vacanciesForm: {
      nameVacancies: {required},
      requirements: {required},
      stack: {required},
      differentials: { required }
    }
  },
  methods: {
    // setHeader: setToken,
    async list() {
        try {
            const response = await axios.get('https://localhost:5001/api/vacancies');//https://jsonplaceholder.typicode.com/users
            console.log(response.data);
            this.vacanciesList = response.data;
        } catch (error) {
            console.error(error);
        }   
    },
    async save(){
        console.log("vacanciesForm");
        console.log(this.vacanciesForm);
        await axios.post('https://localhost:5001/api/vacancies', this.vacanciesForm)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        this.closeModal();
        this.list();
                        
    },
    async edit(id,item){
       await axios.put('https://localhost:5001/api/vacancies/' + id, item)
        .then(function (response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        })
        this.closeModalEdit();
        this.list();
    },
    editForm(item) {
      this.vacanciesForm = {};
      this.vacanciesForm = { ...item };
      console.log("ABRINDO EDIT MODAL");
      console.log(this.vacanciesForm);
      $("#myModalEdit").modal("show");
    },
    deleteForm(item) {
      this.vacanciesForm = {};
      this.vacanciesForm = { ...item };
      console.log("ABRINDO DELETE MODAL");
      console.log(this.vacanciesForm);
      $("#myModalDelete").modal("show");
    },
    async modalDelete(id, item){
        await axios.delete('https://localhost:5001/api/vacancies/'+ item.id)
        .then(function (response){
            console.log(response);
            
        })
        .catch(function (error){
            console.log(error);
        })
        this.closeModalDelete();
        this.list();
                       
    },
     
    closeModal() {
      $("#myModal").modal("hide");
      this.cleanVacanciesForm();
    },
    closeModalEdit() {
      $("#myModalEdit").modal("hide");
      this.cleanVacanciesForm();
    },
    closeModalDelete() {
      $("#myModalDelete").modal("hide");
      this.cleanVacanciesForm();
    },
    cleanVacanciesForm() {
      this.vacanciesForm = {};
    },
    handleSubmit(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      console.log("Entrei");
      this.save();
    },
    handleSubmitEdit(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      console.log("Antes do HandleEdit");
      console.log(this.vacanciesForm);
      this.edit(this.vacanciesForm.id,this.vacanciesForm);
    }
    
  },
  created() {
    
    axios.defaults.baseURL = process.env.VUE_APP_ROOT_URL;
    // this.token = this.$store.state.accesstoken;
    // axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
    // this.setHeader(this.token);
    this.list();
    console.log("vacanciesList");
    console.log(this.vacanciesList);

   
 
  }
};
</script>