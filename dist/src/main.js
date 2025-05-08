"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const data_source_1 = require("../data-source");
async function bootstrap() {
    await data_source_1.AppDataSource.initialize()
        .then(() => {
        console.log('Data Source has been initialized!');
    })
        .catch((err) => {
        console.error('Error during Data Source initialization:', err);
    });
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
//# sourceMappingURL=main.js.map