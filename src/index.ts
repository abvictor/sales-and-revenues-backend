import App from "@shared/infra/http/server";

App.listen(App.get("port"), 
    () => console.log(`Server running on port ${App.get("port")}!`));
