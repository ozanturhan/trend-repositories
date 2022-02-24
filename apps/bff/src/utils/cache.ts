const LRU = require('lru-cache');

export let cache = null;

export const initCache = () => {
  const options = {
    max: 500,
    ttl: 86400 * 1000, // 1 day
  };

  cache = new LRU(options);
};
