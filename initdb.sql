-- Clear Database
DROP TABLE IF EXISTS flight CASCADE;
DROP TABLE IF EXISTS services CASCADE;
DROP TABLE IF EXISTS maintenance CASCADE;
DROP TABLE IF EXISTS passengers CASCADE;
DROP TABLE IF EXISTS passenger_baggage CASCADE;
DROP TABLE IF EXISTS crew CASCADE;
DROP TABLE IF EXISTS crew_baggage CASCADE;

-- Initialize Tables

CREATE TABLE "flight" (
  "flight_id" VARCHAR (64),
  "airplane" VARCHAR (64),
  "takeoff_time" TIMESTAMP,
  "landing_time" TIMESTAMP,
  "gate" VARCHAR (64),
  PRIMARY KEY ("flight_id")
);

CREATE TABLE "maintenance" (
  "flight_id" VARCHAR (64),
  "fuel_status" VARCHAR (64),
  "clean_status" VARCHAR (64),
  "maintenance_status" VARCHAR (64),
  CONSTRAINT "FK_maintenance.flight_id"
    FOREIGN KEY ("flight_id")
      REFERENCES "flight"("flight_id")
);

CREATE TABLE "passengers" (
  "flight_id" VARCHAR (64),
  "passenger_id" VARCHAR (64),
  "passenger_name" VARCHAR (64),
  "check_in_time" TIMESTAMP,
  PRIMARY KEY ("passenger_id"),
  CONSTRAINT "FK_passengers.flight_id"
    FOREIGN KEY ("flight_id")
      REFERENCES "flight"("flight_id")
);

CREATE TABLE "passenger_baggage" (
  "passenger_id" VARCHAR (64),
  "check_in_time" TIMESTAMP,
  "num_of_baggage" INTEGER,
  CONSTRAINT "FK_passenger_baggage.passenger_id"
    FOREIGN KEY ("passenger_id")
      REFERENCES "passengers"("passenger_id")
);

CREATE TABLE "crew" (
  "flight_id" VARCHAR (64),
  "crew_id" VARCHAR (64),
  "crew_name" VARCHAR (64),
  "check_in_time" TIMESTAMP,
  PRIMARY KEY ("crew_id"),
  CONSTRAINT "FK_crew.flight_id"
    FOREIGN KEY ("flight_id")
      REFERENCES "flight"("flight_id")
);

CREATE TABLE "crew_baggage" (
  "crew_id" VARCHAR (64),
  "check_in_time" TIMESTAMP,
  "num_of_baggage" INTEGER,
  CONSTRAINT "FK_crew_baggage.crew_id"
    FOREIGN KEY ("crew_id")
      REFERENCES "crew"("crew_id")
);

CREATE TABLE "services" (
  "flight_id" VARCHAR (64),
  "movie" BOOLEAN,
  "wifi" BOOLEAN,
  "food" VARCHAR (64),
  "beverage" VARCHAR (64),
  "status" VARCHAR (64),
  CONSTRAINT "FK_services.flight_id"
    FOREIGN KEY ("flight_id")
      REFERENCES "flight"("flight_id")
);



-- Initialize default values

INSERT INTO flight (flight_id, airplane, takeoff_time, landing_time, gate)
VALUES ('30625','A339','2022-10-22 14:22:09','2022-10-22 18:20:11','A');

INSERT INTO crew (flight_id, crew_id, crew_name, check_in_time)
VALUES ('30625', 'A139284029', 'John Doe', '2022-10-22 12:22:09');

INSERT INTO passengers (flight_id, passenger_id, passenger_name, check_in_time)
VALUES ('30625', 'B245284034', 'Jerry Day', '2022-10-22 12:22:09');

INSERT INTO maintenance (flight_id, fuel_status, clean_status, maintenance_status)
VALUES ('30625', 'fueled', 'cleaned', 'complete');

INSERT INTO services (flight_id, movie, wifi, food, beverage, status)
VALUES ('30625', 'true', 'true', 'peanuts', 'water', 'stocked');

INSERT INTO crew_baggage(crew_id, check_in_time, num_of_baggage)
VALUES ('A139284029', '2022-10-22 12:22:09', 3);

INSERT INTO passenger_baggage(passenger_id, check_in_time, num_of_baggage)
VALUES ('B245284034', '2022-10-22 12:22:09', 2);