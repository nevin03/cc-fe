/** Base URL of the Django backend, from NEXT_PUBLIC_API_URL (see .env.example). */
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL is not set. Copy .env.example to .env.local.");
export const API_URL = apiUrl.replace(/\/$/, "");

const CAREERS_API = `${API_URL}/api/careers`;

export interface Career {
  id: number;
  career_name: string;
  experience: string;
  /** Free-text description of the role. */
  roles: string;
  created_at: string;
  updated_at: string;
}

export const CV_ACCEPT = ".pdf,.doc,.docx";
export const CV_MAX_BYTES = 5 * 1024 * 1024;

/** Field errors from Django REST Framework, flattened to one message per field. */
export class ApiError extends Error {
  constructor(public fieldErrors: Record<string, string>) {
    super(Object.values(fieldErrors)[0] ?? "Something went wrong. Please try again.");
  }
}

async function parseErrors(response: Response) {
  const body: unknown = await response.json().catch(() => null);
  if (!body || typeof body !== "object") return new ApiError({});
  const errors = Object.fromEntries(
    Object.entries(body).map(([field, value]) => [field, Array.isArray(value) ? String(value[0]) : String(value)]),
  );
  return new ApiError(errors);
}

export async function fetchCareers(signal?: AbortSignal): Promise<Career[]> {
  const response = await fetch(`${CAREERS_API}/careers/`, { signal, headers: { Accept: "application/json" } });
  if (!response.ok) throw await parseErrors(response);
  return response.json();
}

/** Sends a job application; `form` must include career, full_name, email, phone and cv. */
export async function submitApplication(form: FormData) {
  const response = await fetch(`${CAREERS_API}/applications/`, { method: "POST", body: form });
  if (!response.ok) throw await parseErrors(response);
  return response.json();
}
