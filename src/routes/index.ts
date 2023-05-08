// import Router from express
import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = __dirname;
// create the router
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);

  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      //console.log(`Se está cargando la ruta.... /${cleanName}`);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
