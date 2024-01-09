using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace viavem_api.Models
{
    public class Passagens
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Aeroportos")]
        public int IdAeroporto { get; set; }
        public Aeroportos Aeroportos { get; set; }
     
        public string Nome { get; set; }
        public float Preco {  get; set; }
        public string DataSaida {  get; set; }
        public string DataChegada { get; set; }
        public string DataRetorno { get; set; }

    }
}
