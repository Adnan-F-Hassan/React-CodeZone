import { atom } from 'recoil';

const productsState = atom ({
    key: 'productsState',
    default: [
        {id: 1, title: "prod 1" },
        {id: 2, title: "prod 2" },
        {id: 3, title: "prod 3" }
      ]
})

export default productsState;