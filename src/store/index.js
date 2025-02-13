import { createStore } from 'vuex';

const store = createStore({
  state() {
    // Load memories from localStorage, or use default values if none exist
    const storedMemories = localStorage.getItem('memories');
    return {
      memories: storedMemories ? JSON.parse(storedMemories) : [
        {
            id: "m1",
            image:
              "https://i.pinimg.com/736x/9c/35/fd/9c35fdc8d7f91b653a4b4569e1999ce7.jpg",
            title: "การท่องเที่ยว",
            description: "การท่องเที่ยวที่สวยงาม",
          },
          {
            id: "m2",
            image:
              "https://i.pinimg.com/736x/82/87/5a/82875a3894d51f94f11130281754468e.jpg",
            title: "การออกกำลังกาย",
            description: "เล่นวอลเลย์บอล",
          },
          {
            id: "m3",
            image:
              "https://i.pinimg.com/736x/20/9a/29/209a2978305ade8de8cb542a702e313c.jpg",
            title: "การนอน",
            description: "นอนให้เกิน 8-9 ชั่วโมง",
          },
          {
            id: "m4",
            image:
              "https://i.pinimg.com/236x/97/13/e3/9713e37e7d0771d36c6a9c8286bb0836.jpg",
            title: "การใช้จ่ายเงิน",
            description: "เก็บออมเดือนละ 1,500",
          },
      ] 
    } // Default memories if localStorage is empty
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
      // Persist the updated memories list to localStorage
      localStorage.setItem('memories', JSON.stringify(state.memories));
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memoryById(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;