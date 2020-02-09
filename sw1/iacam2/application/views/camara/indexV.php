<div class="row">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Camara Listing</h3>
            	
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>
						<th>ID</th>
						<th>Direccion IP</th>
						<th>Accion</th>
                    </tr>
                    <?php foreach($camara as $c){ ?>
                    <tr>
						<td><?php echo $c['id']; ?></td>
						<td><?php echo $c['dirip']; ?></td>
						<td>

                            <a href="<?php echo site_url('camara/visualizarCamara/'.$c['id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-eye" ></span> ver Filmacion</a> 

                        
                        </td>
                    </tr>
                    <?php } ?>
                </table>
                                
            </div>
        </div>
    </div>
</div>
