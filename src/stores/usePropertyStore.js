import { create } from "zustand";

export const usePropertyStore = create((set) => ({
    properties: [],

    addProperty: (newProperty) => set((state) => ({ properties: [newProperty, ...state.properties] })),
    setProperties: (newProperties) => set({ properties: newProperties || [] }),
    deleteProperty: (id) => set((state) => ({ properties: state.properties.filter((property) => property.id !== id) })),
    updateProperty: (newProperty) => set((state) => ({ properties: state.properties.map((property) => property.id === newProperty.id ? newProperty : property) }))
}));