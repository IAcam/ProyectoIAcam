<style>
   .picture-container {
            position: relative;
            width: 300;
            height: 250px;
            margin: 20px auto;
            border: 10px solid #fff;
            box-shadow: 0 5px 5px #000;
        }
</style>
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

                    <div class="col-sm-9">
                      <iframe src="http://192.168.0.20"  width="720" height="640"></iframe>
                    </div>

                    <div class="col-sm-3">
                        <div class="picture-container" id="imagen"> </div>
                    </div>
                </div>
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
<!-- <script src="../../../resources/js/watson.js"></script> -->