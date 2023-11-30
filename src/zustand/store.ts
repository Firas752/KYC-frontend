import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

type Store = {
	authData: Record<string, any>;
	kycData: Record<string, any>;
	checklistData: Record<string, any>;
};

type Actions = {
	updateAuthData: (data: any) => void;
	updateKycData: (data: any) => void;
	updateChecklistData: (data: any) => void;
};

export const useStore = create<Store & Actions>()(
	devtools(
		persist(
			(set) => ({
				authData: {},
				kycData: {},
				checklistData: {},
				updateAuthData: (data: any) => {
					set(() => ({
						authData: data,
					}));
				},
				updateChecklistData: (data: any) => {
					set(() => ({
						checklistData: data,
					}));
				},
				updateKycData: (data: any) => {
					set((state: Store) => ({
						kycData: {
							...state.kycData,
							...data,
						},
					}));
				},
			}),
			{
				name: "zustand_store",
			},
		),
	),
);
