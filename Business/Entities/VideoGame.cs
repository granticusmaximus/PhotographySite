using System.ComponentModel.DataAnnotations;

namespace Business.Entities
{
    public class VideoGame
    {
        [Key]
        public int Id { get; set; }

        public string Title { get; set; }

        public int Platform { get; set; }
    }
}