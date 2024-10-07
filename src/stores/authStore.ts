import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { Notify } from 'quasar';
import { User, UserData } from 'src/types';

interface UserState {
  token: string | null;
  user?: User | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): UserState => ({
    token: localStorage.getItem('token'),
    user: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user?.access_level === 1,
  },

  actions: {
    async register(credentials: { name: string; email: string; password: string; password_confirmation: string }) {
        try {
          const response = await api.post('/register', credentials);
          this.setToken(response.data.access_token);
         // await this.fetchUser();
          Notify.create({ type: 'positive', message: 'Registered successfully' });
        } catch (error) {
          console.error('Registration failed', error);
          Notify.create({ type: 'negative', message: 'Registration failed' });
        }
      },
  
      async login(credentials: { email: string; password: string }) {
        try {
          const response = await api.post('/login', credentials);
          this.setToken(response.data.data.access_token); 
          console.log(response.data.data.access_token);
          //await this.fetchUser();
          Notify.create({ type: 'positive', message: 'Logado com sucesso' });
        } catch (error) {
          
          Notify.create({ type: 'negative', message: 'Falhou o login' });
        }
      },
  
      async logout() {
        try {
          await api.post('/logout');
          this.clearAuth();
          Notify.create({ type: 'positive', message: 'Deslogado com sucesso' });
        } catch (error) {
          console.error('Falhou o logout', error);
        }
      },
  
     /*  async fetchUser() {
        try {
          const response = await api.get('/user');
          this.user = response.data;
        } catch (error) {
          console.error('Fetching user failed', error);
        }
      }, */
  
      async forgotPassword(email: string) {
        try {
          await api.post('/forgot-password', { email });
          Notify.create({ type: 'positive', message: 'Password reset link sent' });
        } catch (error) {
          console.error('Forgot password request failed', error);
          Notify.create({ type: 'negative', message: 'Failed to send reset link' });
        }
      },
  
      async resetPassword(credentials: { token: string; email: string; password: string; password_confirmation: string }) {
        try {
          await api.post('/reset-password', credentials);
          Notify.create({ type: 'positive', message: 'Password reset successfully' });
        } catch (error) {
          console.error('Password reset failed', error);
          Notify.create({ type: 'negative', message: 'Failed to reset password' });
        }
      },
  
      async updateProfilePhoto(photo: File) {
        try {
          const formData = new FormData();
          formData.append('photo', photo);
          await api.post('/update-profile-photo', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
          //await this.fetchUser();
          Notify.create({ type: 'positive', message: 'Profile photo updated' });
        } catch (error) {
          console.error('Updating profile photo failed', error);
          Notify.create({ type: 'negative', message: 'Failed to update profile photo' });
        }
      },

    async listUsers() {
      try {
        const response = await api.get('/admin/users');
        return response.data;
      } catch (error) {
        console.error('Fetching users failed', error);
        Notify.create({ type: 'negative', message: 'Failed to fetch users' });
      }
    },

    async updateUser(userId: number, userData: UserData) {
      try {
        const response = await api.put(`/admin/users/${userId}`, userData);
        Notify.create({ type: 'positive', message: 'User updated successfully' });
        return response.data;
      } catch (error) {
        console.error('Updating user failed', error);
        Notify.create({ type: 'negative', message: 'Failed to update user' });
      }
    },
    setToken(token: string) {
        this.token = token;
        localStorage.setItem('token', token);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      },
  
      clearAuth() {
        this.token = null;
        this.user = null;
        localStorage.removeItem('token');
        delete api.defaults.headers.common['Authorization'];
      },
  },
});