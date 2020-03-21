drop table SURVEY;

create table SURVEY
(
    ID                         INTEGER not null,
    ZIP                        VARCHAR(1024),
    ADDRESS                    VARCHAR(1024),
    CITY                       VARCHAR(1024),
    COUNTRY                    VARCHAR(1024),
    LATITUDE                   DOUBLE,
    LONGITUDE                  DOUBLE,
    DIRECT_CONTACT             BOOLEAN,
    INDIRECT_CONTACT           BOOLEAN,
    INDIRECT_CONTACTS_SYMPTOMS BOOLEAN,
    DIRECT_CONTACT_CLOSE       BOOLEAN,
    DIRECT_CONTACT_CLOSE_ROOM  BOOLEAN,
    TESTED                     BOOLEAN,
    TESTRESULT                 BOOLEAN,
    RECOVERED                  BOOLEAN,
    date_insert                DATE,
    date_update                DATE
);

create unique index SURVEY_ID_UINDEX
    on SURVEY (ID);

alter table SURVEY
    add constraint SURVEY_PK
        primary key (ID);

create trigger t_insert
    no cascade before insert
    on SURVEY
    referencing new as date_insert
    for each row set date_insert = CURRENT_TIMESTAMP;

create trigger t_update
    no cascade before update
    on SURVEY
    referencing new as date_update
    for each row set date_update = CURRENT_TIMESTAMP;

create or replace view V_SURVEY as
select s.*,
       case
           when DIRECT_CONTACT_CLOSE is true then 1
           when DIRECT_CONTACT_CLOSE_ROOM is true then 2
           else 3 end as risk_class
from SURVEY S;

select json_object('ID' value id,
                   '' value json_object(
                        'ZIP' value zip,
                        'ADDRESS' value address,
                        'LATLONG' value json_object(
                            'LATITUDE' value LATITUDE,
                            'LONGITUDE' value LONGITUDE
                        ),
                        'DATE_UPDATE' value coalesce(date_insert, date_update),
                        'SYMPTOMS' value json_object(
                            'DIRECT_CONTACT' value DIRECT_CONTACT,
                            'INDIRECT_CONTACT' value INDIRECT_CONTACT,
                            'INDIRECT_CONTACTS_SYMPTOMS' value INDIRECT_CONTACTS_SYMPTOMS,
                            'DIRECT_CONTACT_CLOSE' value DIRECT_CONTACT_CLOSE,
                            'DIRECT_CONTACT_CLOSE_ROOM' value DIRECT_CONTACT_CLOSE_ROOM),
                        'RISK_CLASS' value RISK_CLASS,
                        'TESTED' value TESTED,
                        'TESTRESULT' value TESTRESULT,
                        'RECOVERED' value RECOVERED
                    )
           ) as JSON
from V_SURVEY
--where id = ?;