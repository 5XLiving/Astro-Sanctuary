const API_BASE =
  window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost"
    ? "http://127.0.0.1:5000"
    : window.location.origin;

const CORE_CTR_BASE = `${API_BASE}/core-ctr/v1`;
