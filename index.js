import signBuilder from '@dashlane/pqc-sign-dilithium5-node'
import assert from 'node:assert/strict'

async function run() {
    const sign = await signBuilder();
    
    const message = new Uint8Array([0x44, 0x61, 0x73, 0x68, 0x6c, 0x61, 0x6e, 0x65]);
    
    const { publicKey, privateKey } = await sign.keypair();
    const { signature } = await sign.sign(message, privateKey);
    const validSignature = await sign.verify(signature, message, publicKey);
    assert(validSignature === true);
}

run();
