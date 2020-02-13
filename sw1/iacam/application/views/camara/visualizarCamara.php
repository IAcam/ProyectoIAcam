<div class="row">
    <div class="col-md-12">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="box-title">camara</h3>
            </div>
            <?php echo form_open('camara/visualizarCamara/'.$camara['id']); ?>
            <div class="box-body">
                <div class="row clearfix">
                    <div class="col-md-6">
                        <label for="dirip" class="control-label">Direccion IP</label>
                        <div class="form-group">
                            <label name="dirip" class="form-control" id="dirip"><?php echo ($this->input->post('dirip') ? $this->input->post('dirip') : $camara['dirip']); ?></label>
                        </div>
                    </div>

                </div>
              
                     <div class="col-sm-8"><iframe src="https://www.w3schools.com/" height="640" width="720"></iframe></div>
                     <div class="col-sm-3"><iframe src="https://es-la.facebook.com/" height="350" width="400"></iframe></div>
                
                
            </div>
            
            <center>
           

            
            <div class="box-footer">
               
                <a href="<?php echo site_url('camara/indexV'); ?>" class="btn btn-danger">salir</a>
            </div> 
             </center>             
            <?php echo form_close(); ?>
        </div>
    </div>
</div>