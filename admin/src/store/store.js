import { writable } from 'svelte/store';

const user = writable(null);
const error = writable(null);
const paginas = writable([]);
const imagens = writable([]);

export {
  user,
  error,
  paginas,
  imagens,
}