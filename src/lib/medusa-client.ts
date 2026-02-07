/**
 * Medusa JS SDK client placeholder.
 * Replace with actual Medusa backend connection when ready.
 *
 * import Medusa from "@medusajs/js-sdk";
 *
 * const medusa = new Medusa({
 *   baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000",
 *   auth: { type: "session" },
 * });
 *
 * export default medusa;
 */

const MEDUSA_BACKEND_URL =
  process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000";

export { MEDUSA_BACKEND_URL };
