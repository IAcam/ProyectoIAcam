<?php
/* 
 * Generated by CRUDigniter v3.2 
 * www.crudigniter.com
 */
 
class Bitacora_model extends CI_Model
{
    function __construct()
    {
        parent::__construct();
    }
    
    /*
     * Get bitacora by id
     */
    function get_bitacora($id)
    {
        return $this->db->get_where('bitacora',array('id'=>$id))->row_array();
    }
        
    /*
     * Get all bitacora
     */
    function get_all_bitacora()
    {
        $this->db->order_by('id', 'desc');
        return $this->db->get('bitacora')->result_array();
    }
        
    /*
     * function to add new bitacora
     */
    function add_bitacora($params)
    {
        $this->db->insert('bitacora',$params);
        return $this->db->insert_id();
    }
    
    /*
     * function to update bitacora
     */
    function update_bitacora($id,$params)
    {
        $this->db->where('id',$id);
        return $this->db->update('bitacora',$params);
    }
    
    /*
     * function to delete bitacora
     */
    function delete_bitacora($id)
    {
        return $this->db->delete('bitacora',array('id'=>$id));
    }
}