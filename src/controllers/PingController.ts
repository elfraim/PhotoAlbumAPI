import {HttpServer} from '../server/HttpServer';
import Controller from "./Controller";

export default class PingController implements Controller {
    public initialize(httpServer: HttpServer): void {
        httpServer.get('/ping', (req, res) => res.send('ping 💪'));
    }
}