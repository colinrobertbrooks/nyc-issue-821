import Jasmine from "jasmine";

const jasmine = new Jasmine();

jasmine.loadConfigFile("test/jasmine/config.json");

jasmine.execute();
