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

# Create the Rust Library

`cargo new package_name --lib`

## Cargo.toml

```toml
[package]
name = "package_name"
version = "0.1.0"
edition = "2024"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

## src/lib.rs

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

## Build for Node.js

`cd rust`
`wasm-pack build --target nodejs`

This generates:
```
pkg/
- package.json
- package_name.js
- package_name.d.ts
- package_name_bg.wasm
- package_name_bg.wasm.d.ts
```

## Calling in Node.js

Create index.js:
```js
const { add } = require("./pkg");

console.log(add(2, 3));
````

Run:
`node index.js`

Expected output:
`5`
