import express from "express";
import post from "./postRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Tech Challenge"));

  app.use(express.json(), post);
};

export default routes;
