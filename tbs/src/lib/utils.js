import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const Role = {
  FreightForwarder : 1,
  TruckingCompany: 2,
  Terminal: 3
}