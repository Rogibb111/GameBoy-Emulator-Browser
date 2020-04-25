import Address from './data_types/Address.js';

export default interface Registers {
    // 8-bit Registers
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    l: number,
    h: number,
    // flag register
    f: number,
    // 16 bit registers
    pc: Address,
    sp: Address,
    // clock for last instructions
    m: number,
    t: number,
    // interupt master enable
    ime: number
}
