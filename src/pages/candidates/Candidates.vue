<template>
  <div>
    <br />
    <div class="row wrapper border-bottom white-bg page-heading">
      <div class="col-lg-12">
        <h2>Lista de Candidatos</h2>
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
                <h4 class="modal-title">Cadastro de Candidatos</h4>
                <br />
              </center>

              <div class="col-sm-12">
                <br />

                <div class="form-group col-sm-12" :class="{'form-group--error': $v.candidatesForm.name.$error}">
                  <label class="control-label col-sm-4">Nome</label>
                  <div class="input-group col-sm-5">
                    <input
                      type="text"
                      placeholder
                      class="form-control"
                      v-model="candidatesForm.name"
                    />
                    <div class="error" v-if="submitted && !$v.candidatesForm.name.required" >Nome é obrigatório</div>
                    <div class="error" v-if="submitted && !$v.candidatesForm.name.minLength">A Nome deve ter no mínimo {{ $v.candidatesForm.name.$params.minLength.min }} caracteres</div>
                    <div class="error" v-if="submitted && !$v.candidatesForm.name.maxLength">A Nome deve ter no máximo {{ $v.candidatesForm.name.$params.maxLength.max }} caracteres</div>

                  </div>
                </div>

                <div class="form-group col-sm-12" :class="{'form-group--error': $v.candidatesForm.stack.$error}">
                  <label class="control-label col-sm-4">Stack</label>
                  <div class="input-group col-sm-5">
                    <input
                      type="text"
                      placeholder
                      class="form-control"
                      v-model="candidatesForm.stack"
                    />
                    <div class="error" v-if="submitted && !$v.candidatesForm.stack.required" >Stack é obrigatório</div>
                  </div>
                </div>

               

                <div class="form-group col-sm-12" :class="{'form-group--error': $v.candidatesForm.skill.$error}">
                  <label class="control-label col-sm-4">Skill</label>
                  <div class="input-group col-sm-5">
                    <input
                      type="text"
                      placeholder
                      class="form-control"
                      v-model="candidatesForm.skill"
                    />
                    <div class="error" v-if="submitted && !$v.candidatesForm.skill.required" >Skill é obrigatório</div>
                  </div>
                </div>
             
                <div class="form-group col-sm-12" >
                  <label class="control-label col-sm-4">Formação</label>
                  <div class="input-group col-sm-5">
                    <input
                      type="text"
                      placeholder
                      class="form-control"
                      v-model="candidatesForm.graduated"
                    />
                  </div>
                </div>

                <div class="form-group col-sm-12" >
                  <label class="control-label col-sm-4">Experiência</label>
                  <div class="input-group col-sm-5">
                    <input 
                        type="text" 
                        placeholder class="form-control"
                        v-model="candidatesForm.experience"
                    />
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
                <h4 class="modal-title">Cadastro de Candidatos</h4>
                <br />
              </center>

              <div class="col-sm-12">
                <br />

                <div class="form-group col-sm-12" :class="{'form-group--error': $v.candidatesForm.name.$error}">
                  <label class="control-label col-sm-4">Nome</label>
                  <div class="input-group col-sm-5">
                    <input
                      type="text"
                      placeholder
                      class="form-control"
                      v-model="candidatesForm.name"
                    />
                    <div class="error" v-if="submitted && !$v.candidatesForm.name.required" >Nome é obrigatório</div>
                    <div class="error" v-if="submitted && !$v.candidatesForm.name.minLength">A Nome deve ter no mínimo {{ $v.candidatesForm.name.$params.minLength.min }} caracteres</div>
                    <div class="error" v-if="submitted && !$v.candidatesForm.name.maxLength">A Nome deve ter no máximo {{ $v.candidatesForm.name.$params.maxLength.max }} caracteres</div>


                  </div>
                </div>

                <div class="form-group col-sm-12" :class="{'form-group--error': $v.candidatesForm.stack.$error}">
                  <label class="control-label col-sm-4">Stack</label>
                  <div class="input-group col-sm-5">
                    <input
                      type="text"
                      placeholder
                      class="form-control"
                      v-model="candidatesForm.stack"
                    />
                    <div class="error" v-if="submitted && !$v.candidatesForm.stack.required" >Stack é obrigatório</div>
                  </div>
                </div>

               

                <div class="form-group col-sm-12" :class="{'form-group--error': $v.candidatesForm.skill.$error}">
                  <label class="control-label col-sm-4">Skill</label>
                  <div class="input-group col-sm-5">
                    <input
                      type="text"
                      placeholder
                      class="form-control"
                      v-model="candidatesForm.skill"
                    />
                    <div class="error" v-if="submitted && !$v.candidatesForm.skill.required" >Skill é obrigatório</div>
                  </div>
                </div>
             

                <div class="form-group col-sm-12" >
                  <label class="control-label col-sm-4">Formação</label>
                  <div class="input-group col-sm-5">
                    <input
                      type="text"
                      placeholder
                      class="form-control"
                      v-model="candidatesForm.graduated"
                    />
                  </div>
                </div>

                <div class="form-group col-sm-12" >
                  <label class="control-label col-sm-4">Experiência</label>
                  <div class="input-group col-sm-5">
                    <input 
                        type="text" 
                        placeholder class="form-control"
                        v-model="candidatesForm.experience"
                    />
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
                <h4 class="modal-title">Deseja realmente apagar esse Candidato ?</h4>
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
              <button type="button" class="btn btn-primary" @click="modalDelete(candidatesForm.id,candidatesForm)">Comfirmar</button>
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
              <th>Nome</th>
              <th >Stack</th>
              <th >Skill</th>
              <th >Formação</th>
              <th >Experiência</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in candidatesList" :key="item.Id">
              <td >{{item.id}}</td>
              <td >{{item.name}}</td>
              <td >{{item.stack}}</td>
              <td >{{item.skill}}</td>
              <td >{{item.graduated}}</td>
              <td >{{item.experience}}</td>
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
import { required, minLength, between, maxLength } from "vuelidate/lib/validators";
import MaskedInput from "vue-text-mask";


export default {
  name: "Candidates",
  data() {
    return {
     
      total: 0,
      page: 1,
      pagesTotal: 1,
      numberOfItemsPerPage: 10,
      departmentList: [],
      candidatesList: [],
      candidatesForm: {},
      token: "",
      submitted: false
    };
  },
  componets: {
    MaskedInput
  },
  validations: {
    candidatesForm: {
      name: {required,
      minLength: minLength(3),
      maxLength: maxLength(60),
      },
      skill: {required},
      stack: {required},
    
    }
  },
  methods: {
    // setHeader: setToken,
    async list() {
        try {
            const response = await axios.get('https://localhost:5001/api/candidates');//https://jsonplaceholder.typicode.com/users
            console.log(response.data);
            this.candidatesList = response.data;
        } catch (error) {
            console.error(error);
        }   
    },
    async save(){
        console.log("candidatesForm");
        console.log(this.candidatesForm);
        await axios.post('https://localhost:5001/api/candidates', this.candidatesForm)
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
       await axios.put('https://localhost:5001/api/candidates/' + id, item)
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
      this.candidatesForm = {};
      this.candidatesForm = { ...item };
      console.log("ABRINDO EDIT MODAL");
      console.log(this.candidatesForm);
      $("#myModalEdit").modal("show");
    },
    deleteForm(item) {
      this.candidatesForm = {};
      this.candidatesForm = { ...item };
      console.log("ABRINDO DELETE MODAL");
      console.log(this.candidatesForm);
      $("#myModalDelete").modal("show");
    },
    async modalDelete(id, item){
        await axios.delete('https://localhost:5001/api/candidates/'+ item.id)
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
      this.candidatesForm = {};
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
      console.log(this.candidatesForm);
      this.edit(this.candidatesForm.id,this.candidatesForm);
    }
    
  },
  created() {
    
    axios.defaults.baseURL = process.env.VUE_APP_ROOT_URL;
    // this.token = this.$store.state.accesstoken;
    // axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
    // this.setHeader(this.token);
    this.list();
    console.log("candidatesList");
    console.log(this.candidatesList);

   
 
  }
};
</script>