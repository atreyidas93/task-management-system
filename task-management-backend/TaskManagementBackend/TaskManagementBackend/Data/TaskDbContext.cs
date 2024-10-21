using Microsoft.EntityFrameworkCore;
using TaskManagementBackend.Models;

namespace TaskManagementBackend.Data
{
    public class TaskDbContext: DbContext
    {
        public TaskDbContext(DbContextOptions<TaskDbContext> options) : base(options) { }
        public DbSet<TaskItem> TaskItems {  get; set; }
    }
}
