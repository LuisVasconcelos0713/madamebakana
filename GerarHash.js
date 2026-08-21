// gerar-hash.js
import bcrypt from "bcrypt";

const senha = "24266813eb";
const hash = await bcrypt.hash(senha, 10);
console.log("hash", hash);
