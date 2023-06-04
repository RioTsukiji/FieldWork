import { TextEncoder, TextDecoder } from 'text-encoding';

// Polyfill for encoding which isn't present globally in jsdom
if (typeof global.TextEncoder === 'undefined') {
    global.TextEncoder = TextEncoder;
}

if (typeof global.TextDecoder === 'undefined') {
    global.TextDecoder = TextDecoder;
}