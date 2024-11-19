import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { Table } from 'src/types';

export const useTableStore = defineStore('table', {
  state: () => ({
    tables: [] as Table[],
    tableSelected: null as Table | null,
  }),
  actions: {
    async fetchTables() {
      try {
        const response = await api.get('/tables');
        this.tables = response.data.data;
      } catch (error) {
        console.error('Erro ao buscar mesas:', error);
      }
    },
    selecionarMesa(table: Table) {
      this.tableSelected = table;
    },
  },
});