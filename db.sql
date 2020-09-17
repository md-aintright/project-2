CREATE TABLE happy2017 (
  Overall_Rank int PRIMARY KEY,
  City varchar,
  State_id varchar,
  Lat float,
  Lng float,
  Emo_Rank int,
  Income_Rank int,
  Comm_Rank int
);

CREATE TABLE happy2018 (
  Overall_Rank int PRIMARY KEY,
  City varchar,
  State_id varchar,
  Lat float,
  Lng float,
  Emo_Rank int,
  Income_Rank int,
  Comm_Rank int
);

CREATE TABLE happy2019 (
  Overall_Rank int PRIMARY KEY,
  City varchar,
  State_id varchar,
  Lat float,
  Lng float,
  Emo_Rank int,
  Income_Rank int,
  Comm_Rank int
);

CREATE TABLE happy2020 (
  Overall_Rank int PRIMARY KEY,
  City varchar,
  State_id varchar,
  Lat float,
  Lng float,
  Emo_Rank int,
  Income_Rank int,
  Comm_Rank int
);

CREATE TABLE happycandle (
  Overall_Rank int PRIMARY KEY,
  Year int,
  City varchar,
  State_id varchar,
  EPRank int,
  IERank int,
  CERank int
);

CREATE TABLE happyscatter (
  Ranking int,
  Total_Score float,
  Relative_Score float,
  City varchar,
  State_id varchar,
  Lat float,
  Lng float,
  Emotional int,
  Income int,
  Environment int,
  Year int,
  PRIMARY KEY (Ranking, Year)
);
