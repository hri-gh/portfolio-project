import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware'

const authStore = (set: any) => ({
    auth: {
        userInitials: '',
        isLoggedIn: false,
    },


    login: (initials: string) => {
        set((state: any) => ({
            auth: {
                ...state.auth,
                userInitials: initials,
                isLoggedIn: true,
            }
        }));
        // set({ isLoggedIn: true, });
        // localStorage.setItem('isLoggedIn', 'true');
    },

    logout: () => {
        set({
            auth: {
                userInitials: '',
                isLoggedIn: false,
            }
        });
        // set({ isLoggedIn: false });
        // localStorage.setItem('isLoggedIn', 'false');
    },
})


const useAuthStore = create(
    devtools(
        persist(authStore, {
            name: "auth",
        })
    )
)


export default useAuthStore;
