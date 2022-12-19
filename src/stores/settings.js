import { defineStore } from 'pinia'

export const useSettingsStore = defineStore({
  // 這個 store 的 id
  id: 'settings',
  // 這個 store 存了哪些資料
  state () {
    return {
      alarms: [
        { id: 1, name: 'Alarm', file: new URL('@/assets/alarm.mp3', import.meta.url).href },
        { id: 2, name: 'Yay', file: new URL('@/assets/yay.mp3', import.meta.url).href }
      ],
      selectedAlarms: 2,
      notify: false
    }
  },
  actions: {
    async toggleNotify () {
      if (!this.notify && 'Notification' in window) {
        const permission = await Notification.requestPermission()
        if (permission === 'granted') {
          this.notify = true
        }
      } else {
        this.notify = false
      }
    }
  },
  getters: {
    selectedAlarmFile () {
      const i = this.alarms.findIndex(alarm => alarm.id === this.selectedAlarms)
      return this.alarms[i].file
    }
  },
  persist: {
    key: 'pomodoro-settings',
    paths: ['selectedAlarms', 'notify']
  }
})
