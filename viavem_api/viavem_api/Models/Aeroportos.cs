using System.ComponentModel.DataAnnotations;

namespace viavem_api.Models
{
    public class Aeroportos
    {
        [Key]
        public int Id { get; set; }    
        public string Nome { get; set; }    

        public string Cidade { get; set; }

        public string Pais { get; set; }
        


    }
}
