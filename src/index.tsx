import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs'
import {App} from './App';

createServer({

  models: { //banco de bados da api
    transaction: Model
  },

  seeds(server) { //valores predefinidos
    server.db.loadData({
      transactions: [ //este nome é sempre o nome da tabela no plural
        {
          id:1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2022-02-12 09:30:59'),
        },
        {
          id:2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Apto',
          amount: 1080,
          createdAt: new Date('2022-02-12 09:30:59'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', ()=>{
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
