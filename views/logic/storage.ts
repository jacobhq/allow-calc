import { useLocalStorage } from '@vueuse/core'

export const storageDemo = useLocalStorage('webext-demo', {"enabled": true}, { listenToStorageChanges: true })
