--
-- PostgreSQL database dump
--

\restrict 6GnRpnNqHdSSFrWNaSydS2RJKshZOAWzad0ppmShV9DPb0KDjcz5aqrPG9bCTcP

-- Dumped from database version 17.6 (Debian 17.6-2.pgdg12+1)
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: database_5in8_user
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO database_5in8_user;

--
-- Name: epf_status_enum; Type: TYPE; Schema: public; Owner: database_5in8_user
--

CREATE TYPE public.epf_status_enum AS ENUM (
    'pending',
    'confirmed',
    'rejected'
);


ALTER TYPE public.epf_status_enum OWNER TO database_5in8_user;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: epf; Type: TABLE; Schema: public; Owner: database_5in8_user
--

CREATE TABLE public.epf (
    id integer NOT NULL,
    name character varying NOT NULL,
    "uanNumber" character varying,
    "aadharNumber" character varying,
    "aadharCardName" character varying,
    dob character varying,
    "aadharMobile" character varying,
    "bankAccountNumber" character varying,
    "ifscCode" character varying,
    "commissionAmount" integer,
    "paidAmount" integer,
    "workStatus" character varying,
    password character varying,
    "createDate" character varying,
    "updatedDate" character varying,
    "confirmDate" character varying,
    "updatedStatus" character varying,
    "uanPassword" character varying,
    status public.epf_status_enum DEFAULT 'pending'::public.epf_status_enum NOT NULL
);


ALTER TABLE public.epf OWNER TO database_5in8_user;

--
-- Name: epf_id_seq; Type: SEQUENCE; Schema: public; Owner: database_5in8_user
--

CREATE SEQUENCE public.epf_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.epf_id_seq OWNER TO database_5in8_user;

--
-- Name: epf_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: database_5in8_user
--

ALTER SEQUENCE public.epf_id_seq OWNED BY public.epf.id;


--
-- Name: epf id; Type: DEFAULT; Schema: public; Owner: database_5in8_user
--

ALTER TABLE ONLY public.epf ALTER COLUMN id SET DEFAULT nextval('public.epf_id_seq'::regclass);


--
-- Data for Name: epf; Type: TABLE DATA; Schema: public; Owner: database_5in8_user
--

COPY public.epf (id, name, "uanNumber", "aadharNumber", "aadharCardName", dob, "aadharMobile", "bankAccountNumber", "ifscCode", "commissionAmount", "paidAmount", "workStatus", password, "createDate", "updatedDate", "confirmDate", "updatedStatus", "uanPassword", status) FROM stdin;
2	Maan Singh Promode Friend	101300667179	938624144695	MAN SINGH	1986-04-02	8601073649	692910110005434	BKID0006929	2000	\N	Updated	As2743@123	2025-10-30T12:02:59.004Z	\N	\N	FORM 19 WITHDRAW AND 10C BAKI HAI	Pramod@123	pending
1	nilesh dungari	101141691650	462223169792	GAMIT NILESHBHAI MANGUBHAI	1982-01-01	8469699926	20311875450	SBIN0013423	0	\N	Updated	As2743@123	2025-10-30T10:09:52.768Z	\N	\N	FORM 19 AND 10C WITHDRAW	Nilesh@123	pending
3	ganchi sajid relince petrol pump kim	101913226936	454697249321	GHANCHI SAJID USMANGANI	2004-06-03	8866041445	759001500446	ICIC0007590	800	\N	Updated	As2743@123	2025-10-30T14:09:27.330Z	\N	\N	11 nov ko date of exit lagana hai fir claim karna hai	Sajid@1234	pending
4	PRAMOD TRIGUARD	100681994188	401522190950	PRAMOD SINGH	1981-02-02	9065688792	28280100014753	BARB0ANPABS	0	\N	Updated	As2743@123	2025-10-30T15:02:16.388Z	\N	\N	paisa nay company me transfter karna hai lakin complain dalni hai jo sahsi engineer me paisa fasa hua uspe complain type karni hai	Pramod@123	pending
8	PANKAJ PATAN FRIEND MANISH	101172177469	514051765804	VASAVA MANISHBHAI MAHENDRABHAI	1993-06-01	9638069173	02700100014083	BARB0BODHAN	5000	\N	Updated	As2743@123	2025-10-31T13:51:27.260Z	\N	\N	name update request complaint ki hai \ncomplaint no :SROST/E/2025/05224	Manish@123	pending
9	PRADIP KATA KA BHAI PADMANV	100265057766	706953053121	PADMANAV PANDA	1967-10-10	8220685660	30847844631	\N	0	\N	Updated	As2743@123	2025-10-31T13:58:10.624Z	\N	\N	ilness pe 3600 aye hai abhi constuction of house pe 30000 uthaye hai vo process me hai or final pehle 2 memeber id delete karna hai	Panda@123	pending
10	PRAKASH BHIA GIPCL UMESH BHAI FRIEND	100635838874	459818772760	PRAKASHBHAI DAHIYABHAI VASAVA	1979-06-01	6359354741	33683272825	SBIN0013423	0	\N	Updated	As2743@123	2025-10-31T14:18:19.270Z	\N	\N	ye bhai ka old member id par se uan nikal ne ke liye gravince register karna hai	\N	pending
\.


--
-- Name: epf_id_seq; Type: SEQUENCE SET; Schema: public; Owner: database_5in8_user
--

SELECT pg_catalog.setval('public.epf_id_seq', 10, true);


--
-- Name: epf PK_dcd795afffcc80853e4bf55a8de; Type: CONSTRAINT; Schema: public; Owner: database_5in8_user
--

ALTER TABLE ONLY public.epf
    ADD CONSTRAINT "PK_dcd795afffcc80853e4bf55a8de" PRIMARY KEY (id);


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON SEQUENCES TO database_5in8_user;


--
-- Name: DEFAULT PRIVILEGES FOR TYPES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TYPES TO database_5in8_user;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON FUNCTIONS TO database_5in8_user;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TABLES TO database_5in8_user;


--
-- PostgreSQL database dump complete
--

\unrestrict 6GnRpnNqHdSSFrWNaSydS2RJKshZOAWzad0ppmShV9DPb0KDjcz5aqrPG9bCTcP

