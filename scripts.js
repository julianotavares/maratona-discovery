const Modal = {
  open(){
    document
    .querySelector('.modal-overlay')
    .classList
    .add('active')
  },
  close(){
    document
    .querySelector('.modal-overlay')
    .classList
    .remove('active')
  }
} 

const Transaction = {
  incomes() {
    // somar as entradas
  },
  expenses() {
    // somar as saídas
  },
  total() {
    // entradas menos saídas
  }
}