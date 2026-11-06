import { useEffect, useSyncExternalStore } from "react";

export type LeadKind = "early" | "webinar" | "vendor" | "customer" | "contact" | "challenge";

export type Lead = {
  id: string;
  kind: LeadKind;
  name: string;
  phone: string;
  email: string;
  state: string;
  area: string;
  role: string;
  business: string;
  pitch: boolean;
  topic: string;
  message: string;
  at: string;
};

const KEY = "shiftnear.leads.v1";
const PREFIX: Record<LeadKind, string> = {
  early: "EA",
  webinar: "SN",
  vendor: "VN",
  customer: "CU",
  contact: "EN",
  challenge: "DC",
};

let leads: Lead[] = [];
let hydrated = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function readStorage() {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(KEY);
    leads = raw ? (JSON.parse(raw) as Lead[]) : [];
  } catch {
    leads = [];
  }
}

export function hydrateLeads() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  readStorage();
  emit();
}

function persist() {
  localStorage.setItem(KEY, JSON.stringify(leads));
  emit();
}

function makeId(kind: LeadKind) {
  const body = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `${PREFIX[kind]}-${body}`;
}

export function getLeads() {
  return leads;
}

export function subscribeLeads(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function useLeads() {
  const data = useSyncExternalStore(subscribeLeads, getLeads, getLeads);
  useEffect(() => {
    hydrateLeads();
  }, []);
  return data;
}

export function addLead(input: Omit<Lead, "id" | "at">): Lead {
  hydrateLeads();
  if (!hydrated) readStorage();
  const lead: Lead = { ...input, id: makeId(input.kind), at: new Date().toISOString() };
  leads = [lead, ...leads];
  if (typeof window !== "undefined") persist();
  return lead;
}

export function removeLead(id: string) {
  hydrateLeads();
  leads = leads.filter((lead) => lead.id !== id);
  persist();
}

export function waLink(phone: string) {
  let digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0")) digits = `234${digits.slice(1)}`;
  else if (digits.length === 10) digits = `234${digits}`;
  return `https://wa.me/${digits}`;
}

export const STATES = [
  "Lagos",
  "Abuja (FCT)",
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "Other",
] as const;

export function validPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 13;
}

export function validEmail(value: string) {
  if (!value.trim()) return true;
  return /^\S+@\S+\.\S+$/.test(value.trim());
}
