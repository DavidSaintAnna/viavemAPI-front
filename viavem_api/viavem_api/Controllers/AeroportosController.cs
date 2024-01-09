using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using viavem_api.Context;
using viavem_api.Models;

namespace viavem_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AeroportosController : ControllerBase
    {
        private readonly DataContext _context;

        public AeroportosController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Aeroportos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Aeroportos>>> GetAeroportos()
        {
            return await _context.Aeroportos.ToListAsync();
        }

        // GET: api/Aeroportos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Aeroportos>> GetAeroportos(int id)
        {
            var aeroportos = await _context.Aeroportos.FindAsync(id);

            if (aeroportos == null)
            {
                return NotFound();
            }

            return aeroportos;
        }

        // PUT: api/Aeroportos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAeroportos(int id, Aeroportos aeroportos)
        {
            if (id != aeroportos.Id)
            {
                return BadRequest();
            }

            _context.Entry(aeroportos).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AeroportosExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Aeroportos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Aeroportos>> PostAeroportos(Aeroportos aeroportos)
        {
            _context.Aeroportos.Add(aeroportos);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAeroportos", new { id = aeroportos.Id }, aeroportos);
        }

        // DELETE: api/Aeroportos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAeroportos(int id)
        {
            var aeroportos = await _context.Aeroportos.FindAsync(id);
            if (aeroportos == null)
            {
                return NotFound();
            }

            _context.Aeroportos.Remove(aeroportos);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AeroportosExists(int id)
        {
            return _context.Aeroportos.Any(e => e.Id == id);
        }
    }
}
