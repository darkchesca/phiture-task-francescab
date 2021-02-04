--this is just a explanatory file to understand the structure of the db
CREATE TABLE myfifatable(
   Original_Index           INTEGER  NOT NULL PRIMARY KEY
  ,ID                       INTEGER  NOT NULL
  ,Name                     VARCHAR(22) NOT NULL
  ,Age                      INTEGER  NOT NULL
  ,Photo                    VARCHAR(46) NOT NULL
  ,Nationality              VARCHAR(20) NOT NULL
  ,Flag                     VARCHAR(36) NOT NULL
  ,Overall                  INTEGER  NOT NULL
  ,Potential                INTEGER  NOT NULL
  ,Club                     VARCHAR(35)
  ,Club_Logo                VARCHAR(47) NOT NULL
  ,Value                    VARCHAR(7) NOT NULL
  ,Wage                     VARCHAR(5) NOT NULL
  ,Special                  INTEGER  NOT NULL
  ,Preferred_Foot           VARCHAR(5)
  ,International_Reputation INTEGER
  ,Weak_Foot                INTEGER
  ,Skill_Moves              INTEGER
  ,Work_Rate                VARCHAR(14)
  ,Body_Type                VARCHAR(19)
  ,Real_Face                VARCHAR(3)
  ,Position                 VARCHAR(3)
  ,Jersey_Number            INTEGER
  ,Joined                   DATE
  ,Loaned_From              VARCHAR(35)
  ,Contract_Valid_Until     VARCHAR(12)
  ,Height                   VARCHAR(4)
  ,Weight                   VARCHAR(6)
  ,LS                       VARCHAR(4)
  ,ST                       VARCHAR(4)
  ,RS                       VARCHAR(4)
  ,LW                       VARCHAR(4)
  ,LF                       VARCHAR(4)
  ,CF                       VARCHAR(4)
  ,RF                       VARCHAR(4)
  ,RW                       VARCHAR(4)
  ,LAM                      VARCHAR(4)
  ,CAM                      VARCHAR(4)
  ,RAM                      VARCHAR(4)
  ,LM                       VARCHAR(4)
  ,LCM                      VARCHAR(4)
  ,CM                       VARCHAR(4)
  ,RCM                      VARCHAR(4)
  ,RM                       VARCHAR(4)
  ,LWB                      VARCHAR(4)
  ,LDM                      VARCHAR(4)
  ,CDM                      VARCHAR(4)
  ,RDM                      VARCHAR(4)
  ,RWB                      VARCHAR(4)
  ,LB                       VARCHAR(4)
  ,LCB                      VARCHAR(4)
  ,CB                       VARCHAR(4)
  ,RCB                      VARCHAR(4)
  ,RB                       VARCHAR(4)
  ,Crossing                 INTEGER
  ,Finishing                INTEGER
  ,HeadingAccuracy          INTEGER
  ,ShortPassing             INTEGER
  ,Volleys                  INTEGER
  ,Dribbling                INTEGER
  ,Curve                    INTEGER
  ,FKAccuracy               INTEGER
  ,LongPassing              INTEGER
  ,BallControl              INTEGER
  ,Acceleration             INTEGER
  ,SprintSpeed              INTEGER
  ,Agility                  INTEGER
  ,Reactions                INTEGER
  ,Balance                  INTEGER
  ,ShotPower                INTEGER
  ,Jumping                  INTEGER
  ,Stamina                  INTEGER
  ,Strength                 INTEGER
  ,LongShots                INTEGER
  ,Aggression               INTEGER
  ,Interceptions            INTEGER
  ,Positioning              INTEGER
  ,Vision                   INTEGER
  ,Penalties                INTEGER
  ,Composure                INTEGER
  ,Marking                  INTEGER
  ,StandingTackle           INTEGER
  ,SlidingTackle            INTEGER
  ,GKDiving                 INTEGER
  ,GKHandling               INTEGER
  ,GKKicking                INTEGER
  ,GKPositioning            INTEGER
  ,GKReflexes               INTEGER
  ,Release_Clause           VARCHAR(7)
);
