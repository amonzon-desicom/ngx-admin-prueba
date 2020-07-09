import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../api.service';
import { LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'ngx-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  settings = {
    actions:{
      add:true,
      position:'right',
      delete:true,
    },
    add: {
      confirmCreate:true,
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      IDCodigo: {
        title: 'ID',
        type: 'number',
        filter:false,
      },
      LegAdministrador: {
        title: 'Administrador',
        type: 'string',
      },
      LegLegajo: {
        title: 'Legajo',
        type: 'string',
      },
      LegCuil: {
        title: 'Cuil',
        type: 'string',
      },
      LegEMail: {
        title: 'EMail',
        type: 'string',
      },
      LegEstado: {
        title: 'Estado',
        type: 'string',
      },
      LegFechaNacimiento: {
        title: 'Fecha Nacimiento',
        type: 'string',
      },

    },
  };

  source: LocalDataSource;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    

    this.getListado();
  }

  getListado(){

    //this.spiner.show();


    this.api.getLegajos().subscribe (
      data =>{
 
      console.log(data);
      this.source = new LocalDataSource(data['data']);
      //this.source = ;
      //this.source.setSort([{ field: 'LegCuil', direction: 'asc' }]);
     //this.spiner.hide();
    },error=>{
      console.log(error);
     // this.spiner.hide();
    }
    
    );



    //this.spiner.hide();
  }

  onCreateConfirm(event): void {
    console.log(event);
    



      console.log(event.newData)


      this.api.insertLegajo(event.newData).subscribe(
      result=>{

          console.log(result);
          //this.hideForm = true;
          this.getListado();
          //this.hideList = false;
      },resError=>{
        //if(resError['error']['status']  == "10"){
          
          //this.toastr.error ("Clave duplicada","Error!",{progressBar:true,positionClass:'toast-top-center',closeButton:true,disableTimeOut:true});
          //this.ErrMessage= "clave duplicada";
          //this.hideMessage=false;
        //}
        console.log(resError['error']);
  
      });
      event.confirm.resolve();



  }


  onDeleteConfirm(event): void {
    console.log(event);
    
    if (window.confirm('esta seguro?')) {


          console.log("eliminar");
  
          this.api.deleteLegajo(event.data.LegAdministrador+event.data.IDCodigo).subscribe(result=>{
            //this.ErrMessage= "Registro eliminado";
            //this.hideMessage=false;
            this.getListado();
          },error=>{
            console.log(error);
          });



    } else {
      event.confirm.reject();
    }
  }

}
