using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace viavem_api.Models
{
    public class Comentarios
    {
        [Key]
      public int Id { get; set; }

        [ForeignKey("Usuarios")]
        public int UsuariosId { get; set; }

        public Usuarios Usuarios { get; set; }

        public string Comentario { get; set; }

        public string DataPublicacao { get; set; }

    }
}
