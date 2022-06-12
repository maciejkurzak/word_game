// import express, { Express, Request, Response } from 'express'
// import dotenv from 'dotenv'
// import * as http from 'http'
// import next, { NextApiHandler } from 'next'
// import * as socketio from 'socket.io'

// dotenv.config()

// const app: Express = express()
// const port = Number(process.env.PORT || '3000')
// const dev: boolean = process.env.NODE_ENV !== 'production'
// const nextApp = next({ dev })
// const nextHandler: NextApiHandler = nextApp.getRequestHandler()

// nextApp.prepare().then(async () => {
//   const app: Express = express()
//   const server: http.Server = http.createServer(app)
//   const io: socketio.Server = new socketio.Server()
//   io.attach(server)

//   app.get('/hello', async (_: Request, res: Response) => {
//     res.send('Hello World')
//   })

//   io.on('connection', (socket: socketio.Socket) => {
//     console.log('connection')
//     socket.emit('status', 'Hello from Socket.io')

//     socket.on('disconnect', () => {
//       console.log('client disconnected')
//     })
//   })

//   app.all('*', (req: any, res: any) => nextHandler(req, res))

//   server.listen(port, () => {
//     console.log(`> Ready on http://localhost:${port}`)
//   })
// })

export {};
