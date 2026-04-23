const API_URL = process.env.NEXT_PUBLIC_API_URL;

type JobFilter = {
  search?: string;
  location?: string;
  category?: string;
};

export async function getJobs(filters: JobFilter = {}) {

    const params = new URLSearchParams();

    if (filters?.search) params.append("search", filters.search);
    if (filters?.location) params.append("location", filters.location);
    if (filters?.category) params.append("category", filters.category);  

    const res = await fetch(
        // `${API_URL}/jobs${params.toString() ? `?${params.toString()}` : ""}`,
        `${API_URL}/jobs?${params.toString()}`,
        { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch jobs");

    const result = await res.json();

    return result.data;
}

export async function getJobById(id: string) {
  const res = await fetch(`${API_URL}/jobs/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch job");

  const result = await res.json();

  return result.data;
}

export async function createJob(data: any) {
  const res = await fetch(`${API_URL}/jobs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create job");

  const result = await res.json();

  return result.data;
}

// export async function applyToJob(data: any) {
//   const res = await fetch(`${API_URL}/applications`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });

//   if (!res.ok) throw new Error("Failed to apply");
  
//   const result = await res.json();

//   return result.data;
// }

export async function applyToJob(data: any) {
  const res = await fetch(`${API_URL}/applications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    console.error("Backend error:", result);
    throw new Error(result.message || "Failed to apply");
  }

  return result.data;
}

export async function deleteJob(id: string) {
  const res = await fetch(`${API_URL}/jobs/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete job");

  const result = await res.json();

  return result;
}

export async function updateJob(id: string, data: any) {
  const res = await fetch(`${API_URL}/jobs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update job");

  const result = await res.json();

  return result.data;
}

export async function getFeaturedJobs() {
  const res = await fetch(`${API_URL}/jobs/featured`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch featured jobs");

  const result = await res.json();
  return result.data;
}

export async function getLatestJobs() {
  const res = await fetch(`${API_URL}/jobs/latest`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch latest jobs");

  const result = await res.json();
  return result.data;
}

export async function fetchWithAuth(url: string, options: RequestInit = {}) {

  const token = localStorage.getItem("token");

  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
};