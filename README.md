# Rust Node Test

A minimal proof-of-concept showing how to write functionality in Rust, compile it to WebAssembly, and consume it from Node.js

# Prerequisites

I am on Debian so these commands may vary depending on your operating system.

## Rust

Install Rust:
`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`

Verify: 
`rustc --version`
`cargo --version`

## Node.js

It is recommended to update package information before installing new software:
`sudo apt update`

Install Node.js and npm:
`npm apt install nodejs npm`

Verify: 
`node --version`
`npm --version`

## wasm-pack

Install:
`cargo install wasm-pack`

Verify:
`wasm-pack --version`
