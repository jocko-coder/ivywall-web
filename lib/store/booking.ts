"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type {
  AddOn,
  BookingDraft,
  GuestForm,
  PaymentForm,
  RatePlanCode,
  SearchQuery,
} from "../types";

interface BookingState extends BookingDraft {
  // helpers
  setQuery: (q: SearchQuery) => void;
  setRoom: (roomTypeId: string | null) => void;
  setRate: (code: RatePlanCode | null) => void;
  toggleAddOn: (id: string) => void;
  setGuest: (g: GuestForm) => void;
  setPayment: (p: PaymentForm) => void;
  confirm: () => string;
  reset: () => void;
}

function defaultQuery(): SearchQuery {
  const today = new Date();
  const ci = new Date(today.getTime() + 24 * 60 * 60 * 1000 * 7); // +7d
  const co = new Date(ci.getTime() + 24 * 60 * 60 * 1000 * 3); // +3 nights
  const iso = (d: Date) => d.toISOString().slice(0, 10);
  return {
    checkIn: iso(ci),
    checkOut: iso(co),
    adults: 2,
    children: 0,
    rooms: 1,
  };
}

function makeConfirmation() {
  const code = "IVY-" + Math.random().toString(36).slice(2, 8).toUpperCase();
  return code;
}

export const useBooking = create<BookingState>()(
  persist(
    (set, get) => ({
  query: defaultQuery(),
  roomTypeId: null,
  ratePlan: null,
  addOnIds: [],
  guest: null,
  payment: null,
  confirmationCode: null,

  setQuery: (query) => set({ query }),
  setRoom: (roomTypeId) => set({ roomTypeId }),
  setRate: (ratePlan) => set({ ratePlan }),
  toggleAddOn: (id) =>
    set((s) => ({
      addOnIds: s.addOnIds.includes(id)
        ? s.addOnIds.filter((x) => x !== id)
        : [...s.addOnIds, id],
    })),
  setGuest: (guest) => set({ guest }),
  setPayment: (payment) => set({ payment }),
  confirm: () => {
    const code = makeConfirmation();
    set({ confirmationCode: code });
    return code;
  },
  reset: () =>
    set({
      query: defaultQuery(),
      roomTypeId: null,
      ratePlan: null,
      addOnIds: [],
      guest: null,
      payment: null,
      confirmationCode: null,
    }),
    }),
    {
      name: "ivy-booking",
      // sessionStorage: survives refresh + payment-gateway redirects, but clears
      // when the tab closes (a booking draft shouldn't linger forever).
      storage: createJSONStorage(() => sessionStorage),
      partialize: (s) => ({
        query: s.query,
        roomTypeId: s.roomTypeId,
        ratePlan: s.ratePlan,
        addOnIds: s.addOnIds,
        guest: s.guest,
        payment: s.payment,
        confirmationCode: s.confirmationCode,
      }),
    }
  )
);

export function nightsBetween(checkIn: string, checkOut: string): number {
  const ci = new Date(checkIn);
  const co = new Date(checkOut);
  return Math.max(1, Math.round((co.getTime() - ci.getTime()) / (1000 * 60 * 60 * 24)));
}

export function calcAddOnTotal(addOns: AddOn[], ids: string[], adults: number, nights: number) {
  return ids.reduce((sum, id) => {
    const a = addOns.find((x) => x.id === id);
    if (!a) return sum;
    if (a.unit === "per person") return sum + a.price * adults;
    if (a.unit === "per night") return sum + a.price * nights;
    return sum + a.price; // per stay / per booking
  }, 0);
}
