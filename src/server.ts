import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import path from "path";
import swaggerUi from "swagger-ui-express";
import { router } from "./routes";
import swaggerDocs from "./swagger.json";

const port = 3333;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/v1", router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message,
        });
    }
    return res.status(500).json({
        status: "error",
        message: "Internal server error.",
    });
});

app.get('/terms', (request: Request, response: Response) => {
    return response.json({
        message: 'Termos de Serviço'
    })
})
app.listen(port, () => console.log("Servidor rodando na porta 3333"));
