import MMU from '../MMU.js';
import Address from '../models/data_types/Address.js';
import Registers from '../models/Registers.js';

// Read a byte from absolute location into A (LD A, addr)
export function LDAn(_r: Registers) {
    const addr: Address = new Address(MMU.rw(_r.pc));     // Get address from instr
    _r.pc = this._r.pc.ADD(2);                            // Advance PC
    _r.a = MMU.rb(addr);                                  // Read from address
    _r.m = 4;                                             // 4 M-times taken
    _r.t=16;                 
}


export function LDHLnn(_r: Registers) {
    _r.l = MMU.rb(_r.pc);
    _r.h = MMU.rb(_r.pc.ADD(1));
    _r.pc = _r.pc.ADD(2);
    _r.m = 4;
    _r.t = 16;
}

export function LD_HLD_A(_r: Registers) {
    const addr: Address = new Address(_r.h << 8 + _r.l);
    const newAddr: Address = addr.ADD(-1);
    _r.h = (newAddr.getVal() & 0xFF00) >> 8;
    _r.l = (newAddr.getVal() & 0xFF);
    
    MMU.wb(addr, _r.a);
    _r.m = 2;
    _r.t = 8;
}

