<?php
/* 
 * Generated by CRUDigniter v3.2 
 * www.crudigniter.com
 */
 
class Evento_model extends CI_Model
{
    function __construct()
    {
        parent::__construct();
    }
    
    /*
     * Get evento by id
     */
    function get_evento($id)
    {
        return $this->db->get_where('evento',array('id'=>$id))->row_array();
    }
        
    /*
     * Get all evento
     */
    function get_all_evento()
    {
        $this->db->order_by('id', 'desc');
        return $this->db->get('evento')->result_array();
    }
        
    /*
     * function to add new evento
     */
    function add_evento($params)
    {
        $this->db->insert('evento',$params);
        return $this->db->insert_id();
    }
    
    /*
     * function to update evento
     */
    function update_evento($id,$params)
    {
        $this->db->where('id',$id);
        return $this->db->update('evento',$params);
    }
    
    /*
     * function to delete evento
     */
    function delete_evento($id)
    {
        return $this->db->delete('evento',array('id'=>$id));
    }
}