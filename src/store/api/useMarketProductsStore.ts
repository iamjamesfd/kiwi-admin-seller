import { useToast } from '@/utils'
import { StoreFactory } from './utils'

const storeFactory = new StoreFactory()
storeFactory.toast = {
  onToast: (data) => {
    const toast = useToast()
    if (toast) {
      toast.toast(data)
    }
  }
}

export default storeFactory.createStore('/marketproducts/')