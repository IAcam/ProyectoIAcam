<style>
   .picture-container {
            position: relative;
            width: 300;
            height: 250px;
            margin: 20px auto;
            border: 10px solid #fff;
            box-shadow: 0 5px 5px #000;
        }
        .container {
    width: 100%;
    height: 480px;
}
.iframe-class {
    width: 100%;
    height: 100%;
    border: 2px double  red;
    overflow: auto;
}

</style>
<div class="row">
    <div class="col-md-12">
        <div class="box box-info">

             </div>
                    </div>

                    <div class="col-sm-9">
                             <div class="container">
                            <iframe      src="http://192.168.0.14:8080/video" allowfullscreen   >
                            </iframe>
                            </div>
                    </div>

                         <div class="col-sm-3">
                             <div class="picture-container" id="imagen"> 
			                </div>
                        </div>
                </div>



            <?php echo form_close(); ?>
        </div>
    </div>
</div>
<!-- <script src="../../../resources/js/watson.js"></script> --> 

</div> 
