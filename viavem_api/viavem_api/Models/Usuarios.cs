using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace viavem_api.Models
{
    public class Usuarios
    {
        [Key]
        public int Id { get; set; }


        [ForeignKey("Passagens")]
        public int IdPassagens { get; set; }

       public Passagens Passagens { get; set; }
       public string Nome { get; set; }
       public string Senha { get; set; }
       public string Email { get; set; }
    }
}
