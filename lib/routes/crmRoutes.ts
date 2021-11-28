import { Request, Response } from "express";
import app from "../app";

export class Routes {
    public routes(app): void {
        app.route('/')
        .get((req: Request, res: Response) =>{
            res.status(200).send({
                message: 'GET request successful'
            })
        })
    }
}

// Contact
app.route('/contact')
// GET endpoint
.get ((req: Request, res: Response) => {
    // Get all Contacts
        res.status(200).send({
            message: 'GET request successful!!'
        })
})